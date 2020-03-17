<template>
  <div>
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :icons="icons"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="true"
      :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage" />
  </div>
</template>

<script>
import ASK_QUESTION from '../graphql/AskQuestion.gql';

import CloseIcon from 'vue-beautiful-chat/src/assets/close-icon.png'
import OpenIcon from 'vue-beautiful-chat/src/assets/logo-no-bg.svg'
import FileIcon from 'vue-beautiful-chat/src/assets/file.svg'
import CloseIconSvg from 'vue-beautiful-chat/src/assets/close.svg'

export default {
  name: 'app',
  data() {
    return {
      icons:{
        open:{
          img: OpenIcon,
          name: 'default',
        },
        close:{
          img: CloseIcon,
          name: 'default',
        },
        file:{
          img: FileIcon,
          name: 'default',
        },
        closeSvg:{
          img: CloseIconSvg,
          name: 'default',
        },
      },
      participants: [
        {
          id: 'hedron',
          name: 'Hedron Assistant',
          imageUrl: 'https://www.liberaldictionary.com/wp-content/uploads/2018/12/bot.png'
        },
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#237586',
          text: '#ffffff'
        },
        launcher: {
          bg: '#237586'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  methods: {
    sendMessage (message) {
      if (message) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1;
        this.messageList = [ ...this.messageList, message ];

        this.$apollo.mutate({
          mutation: ASK_QUESTION,
          variables: {
            chat: {
              message: message.data.text,
              sessionId: localStorage.getItem('sessionId'),
            }
          }
        })
        .then(({ data }) => {
          localStorage.setItem('sessionId', data.askQuestion.sessionId);
          this.replyMessage(data.askQuestion.output.generic[0].text);
        });
      }
    },
    replyMessage (text = 'No Reply From Support') {
      this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1;
      this.messageList = [ ...this.messageList, { author: 'hedron', type: 'text', data: { text } } ];
    },
    onMessageWasSent (message) {
      this.sendMessage(message);
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
      this.messageList = [];

      this.$apollo.mutate({
          mutation: ASK_QUESTION,
          variables: {
            chat: {
              message: 'hello',
              sessionId: localStorage.getItem('sessionId'),
            }
          }
        })
        .then(({ data }) => {
          localStorage.setItem('sessionId', data.askQuestion.sessionId);
          this.replyMessage(data.askQuestion.output.generic[0].text);
        });
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
      this.newMessagesCount = 0;
      this.messageList = [];
    },
    handleScrollToTop () {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
  	},
    handleOnType () {
      // console.log('Emit typing event')
    },
    editMessage(message){
      const m = this.messageList.find(m=>m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    }
  }
}

</script>