import { Channel, Socket } from "phoenix";
import {
  Session,
} from "~/types";
import { v4 as uuidv4 } from "uuid";

/*
 * Socket composable
 */
export const swarmingSocket = (session_id: string) => {
  // Local variables
  const { socketEndpoint } = useRuntimeConfig().public;
  let channel: Channel | null = null;
  let socket: Socket | null = null;

  // Returned variables
  const participantId = uuidv4();
  const currentValue = ref<number>(0);
  const numberOfParticipants = ref<number>(0);
  const question = ref<string>("");
  const sessionState = ref<Session | null>(null);
  const admin = ref<boolean>(false);
  const state = ref<string>("");
  const error = ref<string | null>(null);


  const startSession = () => {
    // If we already have a socket and channel, don't create a new one
    if (socket && channel) return;
    console.log("startSession")

  // Create the socket and connect
    socket = new Socket(socketEndpoint);
    socket.connect();

    // Create the channel
    channel = socket.channel(`session:${session_id}`, {participant_id: participantId});

    console.log("startSession")
    // Join the channel
    channel
      .join(45000)
      .receive("ok", async () => {

        getState()
      })
      .receive("error", (reasons) => {
        error.value = "Server error";
        throw new Error("Channel join: Server responded with error: ", reasons);
      })
      .receive("timeout", () => {
        throw new Error("Channel join: Server timeout...");
      });
  };

  const getState = () => {
    channel?.push("get_state", { })
    .receive("ok", (currentSessionState: Session) => {
      sessionState.value = currentSessionState
      numberOfParticipants.value = currentSessionState.participants.length
      currentValue.value = currentSessionState.value
      question.value = currentSessionState.question ? currentSessionState.question : ""
      state.value = currentSessionState.state
    })
    .receive("error", (reasons) => {
      error.value = "Server error";
      throw new Error(
        "has_question: Server responded with error: ",
        reasons,
      );
    })
    .receive("timeout", () => {
      error.value = "Server timeout";
      throw new Error("has_question: Server timeout...");
    });
  }

  const setQuestion = (questionInput: string)  => {
    channel?.push("set_question", { question: questionInput, participant_id: participantId })
    .receive("ok", (session: Session) => {
      sessionState.value = session
      question.value = session.question
      admin.value = true
      console.log("setQuestion", admin.value)

    })
    .receive("error", (reasons) => {
      console.log("error set question")
      error.value = "Question already set";
      throw new Error(
        "set_question: Server responded with error: ",
        reasons,
      );
    })
    .receive("timeout", () => {
      error.value = "Server timeout";
      throw new Error("set_question: Server timeout...");
    });
  }

  const startSwarming = ()  => {
    console.log("startSwarming")

    channel?.push("start", {})
    state.value = "swarming"
  }

  const changeDirection = (direction: string)  => {
    console.log("changeDirection")
    channel?.push("change_direction", { participant_id: participantId, direction: direction })
  }


  /*
   * Socket setup
   */
  onMounted(() => {
   startSession()
   
   
   channel.on("value_update", (session: Session) => {
    console.log("value update")
    console.log(session)
    sessionState.value = session
    currentValue.value = session.value ;
  });

  channel.on("new_participant", (message) => {
    console.log("new")
    if (message.participant_id != participantId) {
      numberOfParticipants.value += 1 ;
    }
  });

  channel.on("started", () => {
    console.log("started")
    state.value = "swarming"
  });

  channel.on("stop", () => {
    console.log("stop")
    state.value = "finished"
  });
  
  });


  // Close the socket on unOnMounted
  onUnmounted(() => {
    channel?.leave();
    socket?.disconnect();
  });

  return {
    state,
    startSwarming,
    changeDirection,
    currentValue,
    setQuestion,
    startSession,
    sessionState,
    numberOfParticipants,
    question,
    admin
  };
};
