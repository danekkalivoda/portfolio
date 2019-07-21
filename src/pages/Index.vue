<template>
  <Layout>
    <div class="px-8 pt-32 pb-16 sm:pt-32 sm:pb-16 md:py-32 md:min-h-screen md:left-0 md:right-0 md:fixed flex flex-col items-center justify-center w-full xl:m-auto text-center transition-all">
      <h1 class="text-sm font-thin sm:text-lg lg:text-2xl xl:text-4xl text-gray-800 dark:text-gray-400">
        <span class="font-bold text-lg sm:text-2xl lg:text-4xl xl:text-6xl text-gray-800 dark:text-white">Navrhuji UI/UX webových aplikací.</span> <br> V <a href="https://digital.cz" target="_blank"><span></span>Digital Solutions s.r.o.</a> jsem 12 let product designer.
      </h1>
      <a href="/#contact" v-scroll-to="'#projects'" class="px-8 py-2 mt-8 lg:px-12 lg:py-4 lg:mt-16 bg-green-500 hover:bg-transparent text-white hover:text-green-500 rounded-full text-md font-bold lg:text-lg border border-green-500 transition-all uppercase">Prohlédnout projekty</a>
    </div>
    <div class="p-8 md:mt-screen sm:p-16 relative transition-all bg-gray-200 dark:bg-black md:min-h-screen flex flex-col items-center justify-center" id="about">
      <div class="editor mx-auto w-full lg:w-2/3 xl:w-1/2 lg:text-lg c-container">
        <h2>O mě</h2>
        <p>
          Digitální design mě začal zajímat na střední škole. Nemám vystudovanou žádnou školu se zaměřením na design 
          (vystudoval jsem potravinářskou školu - obor Mlynářství a průmyslová výroba krmiv), ale za dobu, po kterou se grafickému designu 
          věnuji jsem se propracoval až k uvedeným grafickým návrhům. Moje motto je “Pokud musím design příliš vysvětlovat, je to špatný design”.
        </p>
        <p>
          Před nastoupením do Digital Solutions jsem pracoval jako grafik v MAGNETU Blanche Porte a v komunikační agentuře Filip Trend. 
          V nich jsem získal cenné znalosti spojené s tištěnou grafikou a DTP, které občas použiji ještě dnes. Primárně se ale věnuji návrhům 
          webových aplikací, eshopů a v poslední době hlavně UI/UX responsivních informačních systémů.
        </p>
      </div>
      <div class="lg:flex lg:flex-row mt-16 c-container">
        <div class="w-full lg:mr-4">
          <div class="editor leading-snug">
            <h3>UI/UX Designer</h3>
            <p>Adobe Photoshop, Adobe Experience Design, Figma, Adobe Ilustrator, Adobe Indesign, Axure RP… Stack nástrojů, se kterými pracuji 
              občas obměňuji a testuji nové - pracovat s nimi mě baví, každý mi pomáhá jinak. Moje pracovní platforma je Mac, ale s Windows nemám problém…
            </p>
          </div>
        </div>
        <div class="w-full lg:ml-4">
          <div class="editor leading-snug">
            <h3>Developer</h3>
            <p>HTML, CSS, SASS, Jquery a často se potkám s PHP (Smarty, Twigg) a MySQL. Jsem primárně Front-end kodér s přesahem do Fron-end developera. 
              Můj aktuálně nejoblíbenější framework je Tailwind CSS. Pro verzování používám Mercurial a GIT (u starších projektů i SVN).
            </p>
          </div>
        </div>
        <div class="w-full lg:ml-4">
          <div class="editor leading-snug">
            <h3>Product Owner</h3>
            <p>Píšu User Storie, jednám s klienty. Pomáhám jim vytvořit a následně zpravovat jejich digitální produkty. Moje oblíbené nástroje 
              jsou Milanote, Slack a Attlassian Jira.
            </p>
          </div>
        </div>
      </div>
      <a href="/#contact" v-scroll-to="'#projects'" class="px-8 py-2 mt-4 lg:px-12 lg:py-4 lg:mt-8 text-green-500 hover:text-gray-900 dark-hover:text-white rounded-full text-sm border border-green-500 transition-all uppercase">Napište mi</a>
    </div>

    <div class="p-8 sm:p-16 xl:p-32 relative md:min-h-screen flex items-center bg-white dark:bg-gray-900 transition-bg" id="projects">
      <div class="editor mx-auto w-full lg:w-3/4 xl:w-2/3 lg:text-lg c-container">
        <h2>O mě</h2>
        <p>
          Digitální design mě začal zajímat na střední škole. Nemám vystudovanou žádnou školu se zaměřením na design 
          (vystudoval jsem potravinářskou školu - obor Mlynářství a průmyslová výroba krmiv), ale za dobu, po kterou se grafickému designu 
          věnuji jsem se propracoval až k uvedeným grafickým návrhům. Moje motto je “Pokud musím design příliš vysvětlovat, je to špatný design”.
        </p>
      </div>
    </div> 
  </Layout>
</template>

<page-query>
query{
  site: SiteSetting {
    title,
    footer_text,
    about_text
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

