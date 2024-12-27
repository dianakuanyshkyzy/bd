import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Music3 from "@/components/Music3";

export default function Wishes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWish, setCurrentWish] = useState(""); 

  
  const items = [
    {
      image: "/images/bd.png", 
      wish: "Диана, самая моя лучшая подружка! Поздравляю тебя с твоим днем рождения! Вот тебе и исполнилось целых 20 лет! Вступая в новое десятилетие, хочу искренне пожелать тебе всего самого наилучшего - всего, чего ты так достоина. Пусть твои дни будут сиять так же, как и ты всегда сияешь. Пусть близкие люди всегда будут рядом, радуют тебя и заботятся о тебе так же, как и ты о них. Пусть мир улыбается тебе своей светлой улыбкой, пусть удача сопровождает тебя на каждом твоем шагу. Будь счастлива, солнышко. Будь здорова, цела и невредима. Будь любима и люби. Ты — человек, который всегда рядом, независимо от обстоятельств. Ты как тихий и яркий огонек, греющий душу. Я очень ценю тебя. Я горжусь тем, как ты справляешься со всеми испытаниями, как остаешься искренней, сильной и настоящей. Как, падая, встаешь и идешь дальше с новыми силами и улыбкой на лице. Я благодарна за каждый день, за каждую минуту, проведенную с тобой. За наши шутки, которые никто больше не поймет, за ночные разговоры, которые остаются только между нами, за моменты, которые становятся нашими общими воспоминаниями. Я всегда буду рядом, чтобы поддерживать, слушать и понимать тебя и идти с тобой плечом к плечу. Спасибо, что ты такая, какая ты есть. Ты делаешь этот мир лучше, ярче, добрее. Я счастлива быть твоей подругой! Я желаю нам с тобой наслаждаться каждым днем друг с другом, укрепляя нашу непоколебимую дружбу. С днем рождения, моя дорогая! Люблю тебя до луны, обратно и еще дальше. Моя zep❤️",
    },
    {
      image: "/images/bd2.png",
      wish: "дорогая Диана, поздравляю тебя с Днем рождения! желаю тебе исполнения всех целей, которые ты поставишь себе на 21-ый год жизни. оставайся такой же доброй, целеустремленной и трудолюбивой. желаю тебе крепкого здоровья и много близких людей рядом. я верю, что у тебя получится осуществить свои мечты и задумки! уверена, в этом году ты станешь еще мудрее. ты невероятный человек, который может преодолеть любые трудности, помни это. всегда можешь рассчитывать на мою поддержку! с Днем рождения ❤️❤️ Мое любимое воспоминание с тобой: у нас накопилось много воспоминаний за весь период дружбы. самое любимое это когда мы пошли гулять вдвоем в РИО и почему-то начали смотреть старые переписки друг с другом и пацанами. это было очень смешно и весело. также одно из самых любимых воспоминаний это долгие разговоры в комнате до 4-х утра, они были очень healing. удивляюсь, как ты можешь всегда подобрать верные слова и правильно поддержать. еще одно воспоминание и наверное самое любимое это когда мы летом ходили встречать рассвет с одноклассниками. потом мы просто вдвоем пошли гулять и болтали обо всем на свете. наверное это тот самый момент, когда я поняла, что действительно могу тебе доверить все, что угодно. надеюсь, у нас будет еще больше знаменательных моментов из жизни ❤️",
    },
    {
      image: "/images/bd3.png",
      wish: "Дианушка поздравляю тебя с днем рождения, желаю тебе счастья, крепкого здоровья и благополучия. Пусть в твоём окружении будут только хорошие люди и верные друзья. Успешного выпуска с университета, большого карьерного роста и конечно много денег. Чтобы наша дружба с каждым годом становилась только крепче. Я очень сильно тебя люблю и хочу чтобы в жизни у тебя все было прекрасно.",
      
    },
    {
      image: "/images/bd4.png",
      wish: "Дорогая Дианочка, Поздравляю тебя с днем рождения! Я безумно рад, что у меня есть такая замечательная подруга, как ты. С тобой я пережил множество новых и незабываемых моментов, и я счастлив, что все они были именно с тобой. Все самые интересные походы и прогулки этого года я провел в твоей компании, и это делает их еще более ценными для меня. Я очень рад, что у нас с тобой такие теплые и доверительные отношения, благодаря которым мы можем открыто делиться друг с другом многими вещами. Особенно хочу отметить один из самых крутых аспектов нашей дружбы — то, как мы искренне радуемся успехам друг друга. Это невероятно здорово. Я знаю, какая ты трудолюбивая и целеустремленная, и верю, что впереди у тебя будет еще множество ярких достижений. Я счастлив, что мы с тобой учимся на одном мейджоре. Кто знает, может, в будущем мы еще не раз будем помогать друг другу продвигаться в жизни. You know what I mean) В общем, Дианка, желаю тебе счастья, крепкого здоровья (тебе и твоим близким), исполнения всех желаний, высокого GPA и всего самого наилучшего. С любовью, Your iconic Michael",
    },
    {
      image: "/images/bd5.png",
      wish: "Роднуля, искренне поздравляю тебя с днем рождения<33 Желаю тебе всего самого наилучшего, ведь ты этого действительно заслуживаешь. Всегда будь здорова и счастлива, пусть все в твоей жизни будет прекрасно. Пусть все твои мечты имеют свойство сбываться🫶🏻 Ты лучик солнца, добра и радости в жизни многих, продолжай быть собой. Очень дорожу тобой и люблю сильно сильно❤️",
    },
    {
        image: "/images/bd6.png",
        wish: "С днем рождениияя Дианкаа!!🥳🥳🥳🤩🤩желаю тебе здоровья, счастья, удачи, успеха и всего САМОГО наилучшего🙏🏻🙏🏻❤️❤️оставайся такой же лучезарной, умной и доброй красоткой💋💋",
    },
    {
        image: "/images/bd7.png",
        wish: "You deserve all the love and happiness life can offer!",
    },
    {
        image: "/images/bd8.png",
        wish: "You deserve all the love and happiness life can offer!",
      },
      {
        image: "/images/bd9.png",
        wish: "You deserve all the love and happiness life can offer!",
      },
  ];

  const handleModalToggle = (wish = "") => {
    setCurrentWish(wish); 
    setIsModalOpen((prev) => !prev); 
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f0f8ff, #e6e6fa)",
      }}
    >
      <Navbar />
      <Music3 />
      <div
  style={{
    display: "flex",
    flexDirection: "column", // Change to column layout for one image per row
    alignItems: "center", // Center the images horizontally
    gap: "2rem", // Add spacing between rows
    padding: "2rem",
  }}
>
  {/* Render multiple photos */}
  {items.map((item, index) => (
    <div
      key={index}
      style={{
        position: "relative",
        width: "85%", // Make the image larger, but not full screen
        maxWidth: "900px", // Limit the maximum size
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Add a subtle shadow for aesthetics
      }}
      onClick={() => handleModalToggle(item.wish)} // Pass the corresponding wish
    >
        {/* Text above the image */}
      <p
        style={{
          marginBottom: "1rem", // Space between text and image
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        From {["Diana", "Leila", "Amirlan", "Michael", "Akerke", "Damira", "Aigerim", "Ksu", "Aya"][index % 9]}: {/* Rotates between names */}
      </p>
      {/* Image */}
      <img
        src={item.image}
        alt={`Wish ${index + 1}`}
        style={{
          width: "100%",
          height: "auto",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "scale(1.05)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      />

      {/* Hover Text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: "bold",
          textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          pointerEvents: "none",
        }}
      >
        Click on me to see more!
      </div>
    </div>
  ))}
</div>


      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)", // Shadowed background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => handleModalToggle()} // Close modal on clicking outside
        >
          <div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "500px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                color: "#333",
              }}
            >
              Dear Disha...
            </h2>
            <p style={{ fontSize: "1.3rem", color: "#666" }}>{currentWish}</p>
          </div>
        </div>
      )}
    </div>
  );
}
