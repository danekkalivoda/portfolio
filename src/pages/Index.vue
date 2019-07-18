<template>
  <Layout>
    <div class="c-container text-lg sm:text-2xl lg:text-4xl mb-6 sm:mb-12 w-full md:w-3/4 text-center text-black dark:text-white">
      <p>
        Navrhuji UI/UX webových aplikací. <br> V Digital Solutions s.r.o. jsem 10 let designer.
      </p>
    </div>
    <div class="overflow-x-hidden">
      <div class="projects c-container text-md border-t border-gray-300 dark:border-gray-800 border-b py-6 sm:py-12 mb-6 sm:mb-12 relative transition-all">
        <div class="mx-auto md:w-2/3 text-gray-700 dark:text-gray-500">
          <h2 class="font-bold mb-6 text-green-500 text-md sm:text-xl lg:text-2xl" id="about">O mě</h2>
          <p>
            Digitální design mě začal zajímat na střední škole. Nemám vystudovanou žádnou školu se zaměřením na design 
            (vystudoval jsem potravinářskou školu - obor Mlynářství a průmyslová výroba krmiv), ale za dobu, po kterou se grafickému designu 
            věnuji jsem se propracoval až k uvedeným grafickým návrhům. Moje motto je “Pokud musím design příliš vysvětlovat, je to špatný design”.
          </p>
          <p>
            Před nastoupením do Digital Solutions jsem pracoval jako grafik v MAGNETU Blanche Porte a v komunikační agentuře Filip Trend. V nich jsem získal cenné znalosti spojené s tištěnou grafikou a DTP, které občas použiji ještě dnes. Primárně se ale věnuji návrhům webových aplikací, eshopů a v poslední době hlavně UI/UX responsivních informačních systémů.
          </p>
        </div>
      </div> <!-- end projects -->
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me c-container text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="projects">Get to know me:</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div class="flex-1 text-lg sm:text-xl ml-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
        </div>
      </div> <!-- end get-to-know me -->
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

