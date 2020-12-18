import React from 'react';
import KantGame from "../components/KantGame";
import ContentItem from "../components/ContentItem"

const Enlightenment = () => {
  return (
  <div>
   <i>"European politics, philosophy, science and communications were radically reoriented during the course of the “long 18th century” (1685-1815) as part of a movement referred to by its participants as the Age of Reason, or simply the Enlightenment. Enlightenment thinkers in Britain, in France and throughout Europe questioned traditional authority and embraced the notion that humanity could be improved through rational change. The Enlightenment produced numerous books, essays, inventions, scientific discoveries, laws, wars and revolutions. The American and French Revolutions were directly inspired by Enlightenment ideals and respectively marked the peak of its influence and the beginning of its decline. The Enlightenment ultimately gave way to 19th-century Romanticism." <a href="https://www.history.com/topics/british-history/enlightenment"> (History.com) </a></i>
    <br/> Immanuel Kant was one of the most important figures in the Enlightenment. Below is a famous essay of his that discusses enlightenment.
    </div>
  )
}

const Podcast = () => {
  return (
    <div>
    One of Kant's major contributions to philosophy was his analysis of the attainment of knowledge. This included exploring the role that perception has in understanding the world around us, and exploring how reasoning can lead to truth. The following is a podcast between philosophers that discusses some of these topics. Start listening at 16:54, and listen for at least 10 minutes.
    <audio controls>
      <source src="podcast.mp3#t=00:16:54" type="audio/mp3"/>
      Your browser does not support the audio tag.
  </audio>
  </div>
  )
}

export default class Kant extends React.Component{
  render(){
    return(
      <div style={{margin: 0}}>
        <title>Immanuel Kant 💚</title>
        <h1 className="kantText centerText kantConclusion"> Immanuel Kant</h1>
        <ContentItem title = "Introduction"
        task="This Encyclopedia Britannica article gives a thorough introduction to Kant and his work."
        numberLinks={1}
        src="https://www.britannica.com/biography/Immanuel-Kant"
        link="Immanuel Kant"
        discussion= "What makes Kant such an important thinker? What was something you found interesting about him or his ideas?"
        explanation="A necesary component to get an understanding of who Kant is."
        />
        <ContentItem title = "Kant's Thought"
        task="This video gives a quick introduction to some of the key ideas of Kant."
        numberLinks={1}
        src="https://www.youtube.com/watch?v=nsgAsw4XGvU&feature=emb_logo"
        link="Kant's Thought"
        discussion= "Summarize Kant’s thought in one paragraph"
        explanation="This provides students a good opportunity to learn about Kant in an interesting way and allows them to get a better understanding of why he may have been important and why others may have found him interesting. It helps them with the goal of being able to talk about Kant if he was brought up at a party. The discussion task makes the reader synthesize the knowledge they have just learned about Kant, identifying the critical parts of his work."
        />
        <ContentItem title = "The Age of Enlightenment"
        task={<Enlightenment />}
        numberLinks={1}
        src="http://www.columbia.edu/acis/ets/CCREAD/etscc/kant.html"
        link="What is Enlightenment?"
        discussion= "According to Kant's essay, are you Enlightened? Why or why not? Describe how you think Kant may have contributed to The Age of Enlightenment and modern thinking."
        explanation="This discussion has the sole purpose of helping students discover just how significant Kant's contributions were to modern thinking, and of helping students understand his work in the context of one of the most important historical movements of all time. It gets students thinking about why Kant has the kind of influence he has had on virtually almost every modern intellectual that came after him, and allows them to apply Kant's own ideas to their own lives. I hope the students will take away from this discussion how important reasoning is in our lives, and why we have Kant to partly thank for that."
        />
        <ContentItem title = "Perception and Reasoning"
        task={<Podcast />}
        numberLinks={1}
        src="https://philosophynow.org/podcasts/The_Hidden_World_of_Immanuel_Kant"
        link="The Hidden World of Immanuel Kant"
        discussion= "Do you agree with Kant's notion of our experience of the world? Do you think that our senses and those things which we perceive are independent of one another? Provide justification and make reference to Kant's ideas."
        explanation="I like this discussion piece because it extends the podcast in a sense that students get to take part in a conversation that they just listened to philosphers having. It gets students to think about whether they agree with Kant's revolutionary thoughts. And whether or not they do, it solidifies his importance in relation to how we navigate our understanding of the world."
        />
        <ContentItem title = "The Categorical Imperative"
        task="The Categorical Imperative is Kant's most well known idea. It serves as a great introduction into Kantian ethics, a major pillar of his work. Read section 4 of the following article."
        numberLinks={1}
        src="https://plato.stanford.edu/entries/kant-moral/#CatHypImp"
        link="The Categorical Imperative"
        discussion= "What, according to Kant, is the Categorical Imperative that should guide our moral decisions? Do you think Kant is right in this regard, or are there better moral guides (for example the greatest happiness of the greatest number)?"
        explanation="This gets the student thinking about Kantian ethics directly, and gets them to connect the Categorical Imperative to their own views of morality."
        />
        <ContentItem title = "Kant's relevance today"
        numberLinks={2}
        task="Kant may be old, but his ideas are still as important as ever. Take a look at the following two articles to see how his pioneering ideas about ethics and reasoning connect to the modern world."
        src="http://www.qil-qdi.org/kantian-ethics-age-artificial-intelligence-robotics/"
        link="Kantian Ethics & Reasoning in Relation to AI"
        src2="https://theconversation.com/coronavirus-what-philosopher-immanuel-kant-can-teach-us-about-panic-buying-and-isolation-dodging-134491"
        link2="Kantian Ideas & Covid-19"
        discussion= "How does Kant help us understand current political and social issues?"
        explanation="This gets students to make connections between their own world and Kant. It also brings to the forefront the fact that Kant's teachings are still directly applicable to modern challenges, and solidifies his place as a timeless figure."
        />
        <div className="kantConclusion" style={{minHeight: '30vh', color:'white', display: 'flex', alignItems: 'center',justifyContent: 'center',flexDirection: 'column', fontFamily:"Work Sans"}} >
          <div style={{width:"70%", fontSize: "3vh", padding: '50px'}}><i>"His behaviour was such a model of regularity that some called him ‘the Königsberg clock’. On teaching days, when he emerged from his house, people knew it was exactly eight o’clock. At ten to, he had put on his hat; at five to, he had picked up his stick; and at dead on eight he stepped out of his door. He said of his watch that it was the last possession he would part with." (<a href="https://www.versobooks.com/blogs/1963-immanuel-kant-the-errrr-walker">src</a>).</i> <br/>
          <div style={{paddingTop:"17px"}}/><strong>Below is Kant making his daily walk at 2! Use the left and right arrows to take your daily walk, but be quick! The townspeople need to set their clocks!</strong></div>
        </div>
        <KantGame />
      </div>
    )}
  }
