function Envelope() {
  this.envelopeBack = document.querySelector(".envelope-back");
  this.envelopeOpening = document.querySelector(".envelope-opening");
  this.envelopeFront = document.querySelector(".envelope-front");
  this.envelopeMessage = document.querySelector(".envelope-message");
  this.envelopeGlow = document.querySelector(".envelope-shadow");
  this.displayMessage = document.querySelector(".display-message");
  this.envelopeMessageArea = document.querySelector(".envelope-message-area");
  this.smallQuote = document.querySelector(".small-quote");
  this.messageQuote = document.querySelector(".quote");
  this.messageAuthor = document.querySelector(".author");

  this.quotes = [
    {
      quote: "Don't cry because it's over, smile because it happened.",
      author: "Dr. Seuss",
      tag: "happiness"
    },
    {
      quote: "Be yourself, everyone else is already taken.",
      author: "Oscar Wilde",
      tag: "inspirational"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.",
      author: "Albert Einstein",
      tag: "science"
    },
    {
      quote: "I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
      author: "Herbert Bayard Swope",
      tag: "success"
    },
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
      tag: "life"
    },
    {
      quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
      author: "Albert Einstein",
      tag: "science"
    },
    {
      quote: "Be alone, that is the secret of invention. Be alone, that is when ideas are born.",
      author: "Nikola Tesla",
      tag: "inspirational"
    },
    {
      quote: "When something is important enough, you do it even if the odds are not in your favor.",
      author: "Elon Musk",
      tag: "hope"
    },
    {
      quote: "I think it is possible for ordinary people to choose to be extraordinary.",
      author: "Elon Musk",
      tag: "hope"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
      tag: "life"
    },
    {
      quote: "Stay hungry. Stay foolish.",
      author: "Steve Jobs",
      tag: "life"
    },
  ];

  this.colors = {
    hope: {
      envBack: "#bac6bf",
      envMessage: "#ee5252",
      envMsgBorder: "#da4848",
      envOpening: "#DAEDE2",
      envFront: "#DAEDE2"
    },
    science: {
      envBack: "#c63e30",
      envMessage: "#2C3E50",
      envMsgBorder: "#21303e",
      envOpening: "#E74C3C",
      envFront: "#E74C3C"
    },
    life: {
      envBack: "#332532",
      envMessage: "#FF974F",
      envMsgBorder: "#F77A52",
      envOpening: "#644D52",
      envFront: "#644D52"
    },
    success: {
      envBack: "#1B1D26",
      envMessage: "#BFBD9F",
      envMsgBorder: "#aaa88d",
      envOpening: "#425955",
      envFront: "#425955"
    },
    inspirational: {
      envBack: "#1C0C19",
      envMessage: "#CC4452",
      envMsgBorder: "#723147",
      envOpening: "#31152B",
      envFront: "#31152B"
    },
    happiness: {
      envBack: "#1C1D21",
      envMessage: "#445878",
      envMsgBorder: "#394a66",
      envOpening: "#31353D",
      envFront: "#31353D"
    }
  };

  this.openEnvelope = function() {
    this.displayMessage.classList.add("view-message");
    this.messageQuote.style.fontSize = "20px";
    this.messageAuthor.style.fontSize = "16px";
  };

  this.showMessage = function() {
    this.displayMessage.classList.add("view-message");
    this.messageQuote.style.fontSize = "20px";
    this.messageAuthor.style.fontSize = "16px";
  };

  this.closeMessage = function() {
    this.displayMessage.classList.remove("view-message");
    this.messageQuote.style.fontSize = "0";
    this.messageAuthor.style.fontSize = "0";
  };

  this.envelopeColor = function(frontColor, backColor, msgColor, msgBorderColor, opnColor) {
    this.envelopeFront.style.borderLeftColor = frontColor;
    this.envelopeFront.style.borderRightColor = frontColor;
    this.envelopeFront.style.borderBottomColor = frontColor;
    this.envelopeBack.style.background = backColor;
    this.envelopeMessage.style.background = msgColor;
    this.envelopeMessage.style.borderColor = msgBorderColor;
    this.displayMessage.style.background = msgColor;
    this.displayMessage.style.borderColor = msgBorderColor;
    this.envelopeOpening.style.borderTopColor = opnColor;
  };

  this.getEnvelope = function() {
    const qaa = this.quotes;
    const randomIndex = Math.floor(Math.random() * qaa.length);

    if (this.envelopeOpening.classList.contains("open-envelope")) {
      // Close the envelope if is opened
      this.openEnvelope();
      // Don't change the quote if the envelope is opened
      this.smallQuote.textContent = this.smallQuote.textContent;
      this.messageQuote.textContent = this.messageQuote.textContent;
      this.messageAuthor.innerHTML = this.messageAuthor.textContent;
    }
    else {
      // Get random quote if the envelope is closed
      this.smallQuote.textContent = `${qaa[randomIndex].quote}`;
      this.messageQuote.textContent = `${qaa[randomIndex].quote}`;
      this.messageAuthor.innerHTML = `&mdash;&nbsp;${qaa[randomIndex].author}`;
      // Change the envelope color
      // Save the tag from quotes to a variable
      const tag = qaa[randomIndex].tag;
      const colors = this.colors;
      const envBack = colors[tag].envBack;
      const envMsg = colors[tag].envMessage;
      const envMsgBorder = colors[tag].envMsgBorder;
      const envOpn = colors[tag].envOpening;
      const envFront = colors[tag].envFront;

      // Call the function to change colors
      this.envelopeColor(envFront, envBack, envMsg, envMsgBorder, envOpn);
    }
  };
}

const envelope = new Envelope();