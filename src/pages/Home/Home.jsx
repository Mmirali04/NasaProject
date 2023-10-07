import React from 'react'
import planeta from "../../assets/planeta.jpg"
import water from "../../assets/water.jpg"
import healph from "../../assets/healph.jpg"
import hel from "../../assets/maxresdefault.jpg"
import meravenstvo from "../../assets/neravenstvo.webp"
 import "./Home.css"

const Home = () => {
  return (
    <div>
      <div className='flex mt-[50px]'>
        <div className='w-[50%] ml-[30px] '>
          <img src={planeta} className='w-[90%]  ' alt="" />
       
        </div>
        <div className='w-[50%] relative right-[50px]'>
          <p className='mt-[10px]'>Climate change 🌍🌡️: Rising global temperatures, changing weather patterns, and rising sea levels are caused by greenhouse gas emissions and ecosystem destruction. </p>
          <p className='mt-[10px]'>Yes, climate change is one of the most serious global issues. The increase in Earth's temperature leads to a range of negative consequences, including extreme weather conditions such as severe storms, droughts, and floods. Rising sea levels threaten coastal cities and island nations. </p>
          <p className='mt-[10px]'>  Greenhouse gas emissions, such as carbon dioxide, cause the greenhouse effect, which traps heat in the atmosphere and intensifies the greenhouse effect. This results in global warming and changes in climate conditions on Earth. </p>
          <p className='mt-[10px]'>  Ecosystem destruction also plays a significant role in climate change. Forest fires, deforestation, and the destruction of natural habitats release a large amount of carbon into the atmosphere and reduce the ability of ecosystems to absorb carbon dioxide. </p>
          <p className='mt-[10px]'> Addressing climate change requires reducing greenhouse gas emissions, transitioning to clean energy sources, conserving and restoring ecosystems, and taking measures to adapt to the already occurring climate changes. This is a task that needs to be tackled through collective efforts of all countries and communities.</p>        
        </div>
      </div>

      <div className='flex mt-[100px]'>
        <div className='w-[50%] ml-[30px]'>
        <div className='w-[93%]'>
          <p className='mt-[6px]'>Water issues 💧🚱: Lack of clean drinking water, water pollution, and improper water resource management pose threats to human health and life.</p> 
          <p className='mt-[6px]'>Water scarcity and lack of access to clean drinking water are significant challenges faced by many communities around the world. This scarcity can lead to hygiene-related diseases, malnutrition, and even death. It disproportionately affects vulnerable populations, such as those living in poverty or in remote areas.</p>
          <p className='mt-[6px]'>Water pollution, caused by industrial waste, agricultural runoff, and improper disposal of chemicals and waste, contaminates water sources and makes them unsafe for human consumption. This pollution not only affects drinking water but also harms aquatic ecosystems and biodiversity.</p>
          <p className='mt-[6px]'>Addressing water issues requires sustainable water management practices, including conservation, efficient use, and proper treatment of water resources. It also involves implementing policies and regulations to prevent water pollution and ensure equitable access to clean water for all. Collaboration between governments, communities, and organizations is crucial in finding solutions to these water challenges. </p>
        </div>  
        </div>
        
        <div className='w-[50%]'>
          <img src={water} alt="" />
        </div>
      </div>


      <div className='flex mt-[100px]'>
        <div className='w-[50%] ml-[30px]'>
          <img src={hel} className='w-[90%]' alt="" />
        </div>

        <div className='w-[50%] mr-[50px]'>
          <p className='mt-[10px]'>Здоровье и эпидемии 🌡️🌡️: Распространение инфекционных заболеваний, отсутствие доступа к качественной медицинской помощи, угроза пандемий оказывают существенное влияние на здоровье населения.</p>
          <p className='mt-[10px]'>Инфекционные заболевания представляют собой постоянную проблему для общественного здравоохранения. Они могут быстро распространяться в сообществах, вызывая болезни, инвалидность и даже смерть. К распространенным инфекционным заболеваниям относятся респираторные инфекции, диарейные заболевания, трансмиссивные заболевания, такие как малярия и лихорадка денге, а также инфекции, передающиеся половым путем.</p> 
          <p className='mt-[10px]'>Доступ к качественному здравоохранению необходим для профилактики, диагностики и лечения заболеваний. Однако многие люди во всем мире сталкиваются с препятствиями на пути к здравоохранению, такими как финансовые ограничения, ограниченная инфраструктура здравоохранения и неадекватные медицинские услуги в сельских или отдаленных районах. Отсутствие доступа может привести к задержке или неадекватному лечению, что приведет к ухудшению результатов в отношении здоровья.</p>

        </div>
      </div>

    <div className='flex mt-[100px]'>
      <div className='w-[50%] ml-[30px]'>
        <div className='w-[90%]'>
          <p className='mt-[10px]'>Poverty and Inequality 💰🤝: Many people live in extreme poverty, face social inequality, and lack access to basic services and opportunities.</p>
          <p className='mt-[10px]'>Poverty and social inequality are serious issues that millions of people around the world experience. Poverty means not only a lack of material resources but also limited access to education, healthcare, food, water, housing, and other basic services.</p>
          <p className='mt-[10px]'>Social inequality exacerbates the problem of poverty, as certain population groups find themselves in more vulnerable positions due to discrimination, unequal distribution of resources, and limited opportunities. This can include women, children, migrants, persons with disabilities, and other vulnerable groups.</p>
          <p className='mt-[10px]'>Addressing poverty and social inequality requires a comprehensive approach. This includes creating equal opportunities for all, ensuring access to quality education and healthcare, promoting decent work and sustainable economic growth.</p>
          <p className='mt-[10px]'>Government policies, social protection programs, investments in infrastructure and human capital development, as well as support for small business development and microcredit provision, can contribute to reducing poverty and inequality.</p>
        </div>
      </div>

      <div className='w-[50%] mr-[50px]'>
        <img src={meravenstvo}  alt="" />      
      </div>
    </div>

    </div>
  )
}

export default Home