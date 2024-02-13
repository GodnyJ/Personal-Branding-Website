import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import Upcoming from './Upcoming';
import UpcomingInfo from './UpcomingInfo';
import AboutMe from './AboutMe';
import Services from './Services';
import ServiceItem from './ServiceItem';
import LearningPath from './LearningPath';
import LearningPathInfo from './LearningPathInfo';
import Footer from './Footer';
import CooperationCard from './CooperationCard';
import TrainingsSection from './TrainingsSection';
import Training from './Training';
import TrainingEdition from './TrainingEdition';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <HeroSection />

      <Upcoming>

        <UpcomingInfo
          id={'terraform'}
          iconSrc={'terraform-icon.png'}
          title={'Terraform'}
          date={'06.03.2024'}
          description={''}
          textBtn={'See more'}
        />

        <UpcomingInfo
          id={'kubernetes'}
          iconSrc={'kubernetes-icon.png'}
          title={'Kubernetes'}
          date={'12.02.2024'}
          description={''}
          textBtn={'See more'}
        />

      </Upcoming>
        
      <AboutMe />

      <Services>
        <ServiceItem
          srcIcon={'consultancy-icon.png'}
          title={'konsultacje'}
          textButton={'umów się'}
          linkButton={'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lTFBteuz3q4pyF3CnpLuK95lZMjzSwU4Jsc-QA4w7joVk0CqRK2-cU8trNHtzcUcbW_5g3iDk?gv=true'}
        />
        <ServiceItem
          srcIcon={'services-icon2.png'}
          title={'mentoring'}
          textButton={'porozmawiajmy'}
          linkButton={'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lTFBteuz3q4pyF3CnpLuK95lZMjzSwU4Jsc-QA4w7joVk0CqRK2-cU8trNHtzcUcbW_5g3iDk?gv=true'}
        />
        <ServiceItem
          srcIcon={'services-icon4.png'}
          title={'szkolenia'}
          textButton={'zapytaj'}
          linkButton={"https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lTFBteuz3q4pyF3CnpLuK95lZMjzSwU4Jsc-QA4w7joVk0CqRK2-cU8trNHtzcUcbW_5g3iDk?gv=true"}
        />
        <ServiceItem
          srcIcon={'services-icon3.png'}
          title={'dla firm'}
          textButton={'ustalmy szczegóły'}
          linkButton={'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lTFBteuz3q4pyF3CnpLuK95lZMjzSwU4Jsc-QA4w7joVk0CqRK2-cU8trNHtzcUcbW_5g3iDk?gv=true'}
        />
      </Services>

      <TrainingsSection>

        <Training
          id={'terraform'}
          srcLogo={'terraform-color.svg'}
          title={'terraform'}
          color={'purple'}
          price={'799 zł'}
          srcImg={'terraform-img3.png'}
        >
          <TrainingEdition
            color={'purple'}
            level={'od podstaw'}
          />
          
          <LearningPath additionalColor ={'#7b42bc'}>
            <LearningPathInfo
              title={'rozgrzewka'}
              info={'Dostępne przed rozpoczęciem kursu'}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi alias aliquam facilis earum commodi esse, quos laborum, in ducimus magnam architecto sit minima modi totam ratione error fugiat corporis.'}
              footerColor={'purple'}
            />
            <LearningPathInfo
              title={'Wprowadzenie do Terraform'}
              info={'krok 1 - 2h'}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi alias aliquam facilis earum commodi esse, quos laborum, in ducimus magnam architecto sit minima modi totam ratione error fugiat corporis.'}
              footerColor={'purple'}
            />
            <LearningPathInfo
              title={'Tworzenie infrastruktury na GCP'}
              info={'krok 2 - 2h'}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi alias aliquam facilis earum commodi esse, quos laborum, in ducimus magnam architecto sit minima modi totam ratione error fugiat corporis.'}
              footerColor={'purple'}
            />
            <LearningPathInfo
              title={'praca własna'}
              info={'stworzenie projektu i wysłanie do oceny'}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi alias aliquam facilis earum commodi esse.'}
              footerColor={'purple'}
            />
          </LearningPath>

        </Training>
        <Training
         id={'kubernetes'}
        srcLogo={'kubernetes-color.svg'}
        title={'kubernetes'}
        color={'blue'}
        price={'799 zł'}
        srcImg={'kubernetes-img4.png'}
        >
          <TrainingEdition
            color={'blue'}
            level={'od podstaw'}
          />
          
          <LearningPath additionalColor ={'blue'} >
            <LearningPathInfo
              title={'rozgrzewka'}
              info={'Dostępne przed rozpoczęciem kursu'}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi alias aliquam facilis earum commodi esse, quos laborum, in ducimus magnam architecto sit minima modi totam ratione error fugiat corporis.'}
              footerColor={'blue'}
            />
            <LearningPathInfo
              title={'Kubernetes - podstawy'}
              info={'krok 1 - 2h'}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi alias aliquam facilis earum commodi esse, quos laborum, in ducimus magnam architecto sit minima modi totam ratione error fugiat corporis.'}
              footerColor={'blue'}
            />
            <LearningPathInfo
              title={'Praca z klastrem'}
              info={'krok 2 - 2h'}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi alias aliquam facilis earum commodi esse, quos laborum, in ducimus magnam architecto sit minima modi totam ratione error fugiat corporis.'}
              footerColor={'blue'}
            />
            <LearningPathInfo
              title={'praca własna'}
              info={'stworzenie projektu i wysłanie do oceny'}
              description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi alias aliquam facilis earum commodi esse.'}
              footerColor={'blue'}
            />
          </LearningPath>

        </Training>

      </TrainingsSection>  



      



      {/* <TrainingPage
        id={'terraform'}
        srcLogo={'terraform-color.svg'}
        title={'terraform'}
        color={'purple'}
        // price={'799 zł'}
        srcImg={'terraform-img1.png'}
      /> */}
      
      {/* <TrainingPage
        id={'kubernetes'}
        srcLogo={'kubernetes-color.svg'}
        title={'kubernetes'}
        color={'blue'}
        // price={'799 zł'}
        srcImg={'kubernetes-img2.png'}
      /> */}
      
      <CooperationCard/>
      
      <Footer />
    </div>
  )
}

export default App;
