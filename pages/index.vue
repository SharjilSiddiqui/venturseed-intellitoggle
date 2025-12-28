<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <section class="relative bg-gradient-to-b from-primary to-primaryDark min-h-screen text-white overflow-hidden font-sans">
    <Header />

    <div class="pt-32 sm:pt-44 md:pt-56 pb-20 text-center px-4 md:px-6 relative z-10 flex flex-col items-center">
      
      <h1 class="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-tight max-w-5xl">
        The First 
        <span class="inline-block bg-accent text-primaryDark px-2 py-1 md:px-4 md:py-1 rounded-lg mx-1 md:mx-2 transform shadow-md">
          Dart-Native
        </span> 
        Feature Flag 
        <br class="hidden sm:block" />
        With DartCodeAI
      </h1>

      <p class="mt-6 md:mt-8 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-[22px] font-medium text-white/90 leading-snug md:leading-relaxed px-4">
        Feature flags built for Dart. Ship faster, roll back
        <br class="hidden md:block" />
        safely, and scale with AI-powered delivery
      </p>

      <p class="mt-4 text-accent font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
        Starting at just $1/month
      </p>

      

      <div class="mt-8 md:mt-10 flex flex-col items-center w-full max-w-md sm:max-w-none px-4">
  <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
    
    <div class="flex flex-col w-full sm:w-auto">
      <p class="mb-2 text-[10px] sm:text-[11px] md:text-sm font-medium text-white/70 tracking-tight pl-1">
        Valid till 15th September, 2025
      </p>
      <button class="w-full sm:w-[200px] md:w-[220px] bg-accent hover:brightness-110 active:scale-95 text-primaryDark font-bold py-3 rounded-xl transition-all shadow-lg text-base sm:text-lg md:text-xl">
        Get Access
      </button>
    </div>

    <div class="flex flex-col w-full sm:w-auto self-end">
      <button class="w-full sm:w-auto border border-accent text-accent hover:bg-accent/10 active:scale-95 font-bold py-3 px-6 sm:px-8 rounded-xl transition-all text-base sm:text-lg md:text-xl">
        Join AI Early Access
      </button>
    </div>

  </div>
</div>

      <div class="mt-16 md:mt-24 w-full max-w-5xl px-4 md:px-4">
        <div class="p-1 md:p-2 rounded-xl md:rounded-2xl backdrop-blur-sm shadow-2xl">
          <div class="rounded-lg md:rounded-xl overflow-hidden bg-white">
             <div class="h-6 sm:h-7 md:h-9 bg-mutedBg flex items-center px-2 sm:px-3 md:px-4 gap-1 sm:gap-1.5 md:gap-2 border-b border-gray-200">
                <div class="w-2 sm:w-2 md:w-3 h-2 sm:h-2 md:h-3 rounded-full bg-[#FF5F57]"></div>
                <div class="w-2 sm:w-2 md:w-3 h-2 sm:h-2 md:h-3 rounded-full bg-[#FFBD2E]"></div>
                <div class="w-2 sm:w-2 md:w-3 h-2 sm:h-2 md:h-3 rounded-full bg-[#28C840]"></div>
                <div class="flex-1 flex justify-center">
                  <div class="bg-white px-2 py-0.5 rounded text-[8px] md:text-[10px] text-gray-400 w-2/3 sm:w-1/2 md:w-1/3 text-center border border-gray-100 truncate">app.dartcode.ai</div>
                </div>
             </div>
             <img 
               src="/public/dashboard.png" 
               alt="Dashboard" 
               class="w-full h-auto block"
             />
          </div>
        </div>
      </div>
    </div>

    <div 
      class="absolute bottom-0 left-0 w-full h-[100px] sm:h-[150px] md:h-[250px] lg:h-[400px] bg-white pointer-events-none z-0" 
      style="clip-path: polygon(0 100%, 100% 100%, 100% 0);"
    ></div>
  </section>


  <!-- TRUST -->
<section class="py-12 sm:py-16 md:py-20 text-center px-4">
  <p class="font-semibold text-[20px] sm:text-[24px] md:text-[30px] text-[#1F2340] mb-8 sm:mb-10 md:mb-12">
    Trusted by various engineering teams
  </p>

  <div class="flex justify-center items-center gap-8 sm:gap-12 md:gap-16 flex-wrap">
    <img
      src="/public/gcp.png"
      alt="Google Cloud"
      class="h-8 sm:h-10 md:h-12 opacity-90"
    />

    <img
      src="/public/aws.png"
      alt="Amazon Web Services"
      class="h-8 sm:h-10 md:h-12 opacity-90"
    />

    <img
      src="/public/azure.png"
      alt="Microsoft Azure"
      class="h-8 sm:h-10 md:h-12 opacity-90"
    />

    <img
      src="/public/digitalocean.png"
      alt="DigitalOcean"
      class="h-8 sm:h-10 md:h-12 opacity-90"
    />

    <img
      src="/public/ibm.png"
      alt="IBM"
      class="h-8 sm:h-10 md:h-12 opacity-90"
    />
  </div>
</section>


  <!-- WHAT IS IntelliToggle -->
<section class="py-16 sm:py-20 md:py-28 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Section Title -->
    <h2
      class="text-center text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-primaryDark mb-12 sm:mb-14 md:mb-16"
    >
      What Is IntelliToggle
    </h2>

    <!-- Content -->
    <div class="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
      <!-- LEFT: Text -->
      <div class="px-4 sm:px-0">
        <h3
          class="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-gray-900 leading-snug"
        >
          Your AI Dart App's Control Panel For
          <br />
          Feature Releases
        </h3>

        <p class="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
          IntelliToggle is a "Dart-Powered" feature flag that lets you turn
          features on/off instantly in your application without redeploying
          code. It allows you control roll-outs, run experiments, and fix bugs
          faster.
        </p>

        <div class="mt-5 sm:mt-6">
          <p class="font-semibold text-gray-900 mb-2">Benefits</p>
          <ul class="space-y-2 text-sm sm:text-base text-gray-600 list-disc ml-5">
            <li>Toggle new features without app updates</li>
            <li>Roll out to specific users or regions</li>
            <li>Instantly rollback when needed</li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Dashboard Image -->
      <div class="relative px-4 sm:px-0">
        <div
          class="rounded-2xl bg-gradient-to-br from-primary to-primaryDark p-[8px] sm:p-[10px]"
        >
          <img
            src="/public/feature-dashboard.png"
            alt="IntelliToggle Dashboard"
            class="rounded-xl bg-white shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</section>


<!-- OPEN FEATURE -->
<section class="bg-mutedBg py-16 sm:py-20 md:py-28">
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6
           grid md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-center"
  >

    <!-- Logo Card -->
    <div
      class="bg-white rounded-2xl
             border border-primary/30
             h-[300px] sm:h-[360px] md:h-[420px]
             flex items-center justify-center"
    >
      <img
        src="/public/open-feature.png"
        alt="OpenFeature"
        class="max-w-[180px] sm:max-w-[220px] md:max-w-[260px]"
      />
    </div>

    <!-- Content -->
    <div class="max-w-xl px-4 sm:px-0">
      <h3
        class="text-xl sm:text-2xl md:text-3xl font-semibold
               text-tableHeader mb-4 sm:mb-5"
      >
        Seamless Feature Management with OpenFeature
      </h3>

      <p
        class="text-sm sm:text-base text-gray-500 leading-relaxed mb-6 sm:mb-8"
      >
        Aortem now integrates with OpenFeature to provide developers
        with a powerful, standardized approach to feature flagging and
        dynamic configuration. Ship features faster, test safely, and
        optimize user experiences effortlessly.
      </p>

      <button
        class="inline-flex items-center gap-2
               bg-accent text-primaryDark
               px-5 sm:px-6 py-2.5 sm:py-3 rounded-md
               font-semibold text-sm sm:text-base
               hover:brightness-105 transition"
      >
        Learn More
        <span class="text-lg">→</span>
      </button>
    </div>

  </div>
</section>


  <!-- CONTROL & POWER -->
<section class="py-16 sm:py-20 md:py-28 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Title -->
    <h2
      class="text-center text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-primaryDark mb-12 sm:mb-14 md:mb-16"
    >
      Control & Power-focused
    </h2>

    <!-- Cards -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-14">
      <!-- Card 1 -->
      <div>
        <div
          class="rounded-2xl bg-white p-2 sm:p-3"
        >
          <img
            src="/public/connect.png"
            alt="Connect"
            class="rounded-xl w-full"
          />
        </div>

        <h4 class="mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-gray-900">
          Connect
        </h4>
        <p class="mt-2 text-gray-600 text-xs sm:text-sm max-w-xs">
          Install SDK in your Dart project in 2 mins.
        </p>

        <button
          class="mt-3 sm:mt-4 inline-block border border-accent text-accent
                 px-4 sm:px-5 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-accent hover:text-black"
        >
          View Documentation
        </button>
      </div>

      <!-- Card 2 -->
      <div>
        <div
          class="rounded-2xl bg-white p-2 sm:p-3"
        >
          <img
            src="/public/flags.png"
            alt="Create Flags"
            class="rounded-xl w-full"
          />
        </div>

        <h4 class="mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-gray-900">
          Create Flags
        </h4>
        <p class="mt-2 text-gray-600 text-xs sm:text-sm max-w-xs">
          Define features in IntelliToggle dashboard.
        </p>

        <button
          class="mt-3 sm:mt-4 inline-block border border-accent text-accent
                 px-4 sm:px-5 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-accent hover:text-black"
        >
          View Documentation
        </button>
      </div>

      <!-- Card 3 -->
      <div>
        <div
          class="rounded-2xl bg-white p-2 sm:p-3"
        >
          <img
            src="/public/ship.png"
            alt="Ship & Control"
            class="rounded-xl w-full"
          />
        </div>

        <h4 class="mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-gray-900">
          Ship & Control
        </h4>
        <p class="mt-2 text-gray-600 text-xs sm:text-sm max-w-xs">
          Flip switches anytime, see instant results.
        </p>

        <button
          class="mt-3 sm:mt-4 inline-block border border-accent text-accent
                 px-4 sm:px-5 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-accent hover:text-black"
        >
          View Documentation
        </button>
      </div>
    </div>
  </div>
</section>

<!-- DART-POWERED FEATURE FLAG -->
<section class="py-16 sm:py-20 md:py-28 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Title -->
    <h2
      class="text-center text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-primaryDark"
    >
      Dart-Powered Feature Flag
    </h2>

    <!-- Subtitle -->
    <h3
      class="mt-3 sm:mt-4 text-center text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 px-4"
    >
      Not Another Generic Feature Flag Tool
    </h3>

    <p
      class="mt-3 text-center text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
    >
      Most tools are built for every language, which means extra layers and
      slower toggles. IntelliToggle is built in Dart, for Dart — so it's faster,
      safer, and built for your stack.
    </p>

    <!-- Table -->
    <div class="mt-10 sm:mt-12 md:mt-14 overflow-x-auto rounded-xl border border-gray-200">
      <!-- Header -->
      <div
        class="grid grid-cols-3 bg-gradient-to-b from-primary to-primaryDark
               text-white text-xs sm:text-sm font-semibold min-w-[500px]"
      >
        <div class="px-3 sm:px-4 md:px-6 py-3 sm:py-4">Features</div>
        <div class="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center">IntelliToggle</div>
        <div class="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center">Other Feature Flag</div>
      </div>

      <!-- Rows -->
      <div class="bg-mutedBg text-xs sm:text-sm min-w-[500px]">
        <!-- Row 1 -->
        <div class="grid grid-cols-3 px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div class="text-gray-700">Dart-native SDK & server</div>
          <div class="text-center text-gray-900">✓</div>
          <div class="text-center text-gray-500">×</div>
        </div>

        <!-- Row 2 -->
        <div class="grid grid-cols-3 px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div class="text-gray-700">End-to-end type safety</div>
          <div class="text-center text-gray-900">✓</div>
          <div class="text-center text-gray-500">×</div>
        </div>

        <!-- Row 3 -->
        <div class="grid grid-cols-3 px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div class="text-gray-700">AI-assisted roll-outs & cleanup</div>
          <div class="text-center text-gray-900">✓</div>
          <div class="text-center text-gray-500">×</div>
        </div>

        <!-- Row 4 -->
        <div class="grid grid-cols-3 px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div class="text-gray-700">A/B testing built-in</div>
          <div class="text-center text-gray-900">✓</div>
          <div class="text-center text-gray-500">×</div>
        </div>

        <!-- Row 5 -->
        <div class="grid grid-cols-3 px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div class="text-gray-700">Dart-Powered SDKs</div>
          <div class="text-center text-gray-900">✓</div>
          <div class="text-center text-gray-500">×</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- DARTCODE AI (COMING SOON) -->
<section
  class="relative py-16 sm:py-20 md:py-28 text-white overflow-hidden
         bg-gradient-to-br from-primary via-primary to-primaryDark"
>
  <!-- Background circuit image -->
  <div
    class="absolute inset-0 bg-[url('/ai-bg.png')] bg-cover bg-center"
  ></div>

  <!-- Dark overlay -->
  <div class="absolute inset-0 bg-primaryDark/80"></div>

  <!-- Content -->
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Badge -->
    <div class="flex justify-center mb-5 sm:mb-6">
      <span
        class="bg-accent text-primaryDark px-3 sm:px-4 py-1 rounded-full
               text-xs sm:text-sm font-semibold"
      >
        Coming Soon
      </span>
    </div>

    <!-- Title -->
    <h2
      class="text-center text-[24px] sm:text-[28px] md:text-[32px] font-semibold mb-10 sm:mb-12 md:mb-14"
    >
      DartCodeAI That Actually Changes Flagging
    </h2>

    <!-- Feature Cards -->
    <div class="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
      <!-- Card -->
      <div
        class="border border-white/20 rounded-xl p-5 sm:p-6
               bg-white/5 backdrop-blur-md"
      >
        <div
          class="w-8 h-8 sm:w-9 sm:h-9 mb-3 sm:mb-4 flex items-center justify-center
                 rounded-md bg-white text-primaryDark text-sm sm:text-base"
        >
          ▶
        </div>
        <h4 class="font-semibold text-base sm:text-lg mb-2">
          AutoFlag AI (LLM-Assisted Flag Creation)
        </h4>
        <p class="text-white/80 text-xs sm:text-sm leading-relaxed">
          Create new flags just by typing what you need. The AI names it,
          sets rules, and configures targeting for you.
        </p>
      </div>

      <!-- Card -->
      <div
        class="border border-white/20 rounded-xl p-5 sm:p-6
               bg-white/5 backdrop-blur-md"
      >
        <div
          class="w-8 h-8 sm:w-9 sm:h-9 mb-3 sm:mb-4 flex items-center justify-center
                 rounded-md bg-white text-primaryDark text-sm sm:text-base"
        >
          ☁
        </div>
        <h4 class="font-semibold text-base sm:text-lg mb-2">
          SmartRamp AI (AI-Driven Rollout Optimization)
        </h4>
        <p class="text-white/80 text-xs sm:text-sm leading-relaxed">
          Rollouts that adjust themselves. AI expands, pauses, or rolls back
          based on real-time metrics.
        </p>
      </div>

      <!-- Card -->
      <div
        class="border border-white/20 rounded-xl p-5 sm:p-6
               bg-white/5 backdrop-blur-md"
      >
        <div
          class="w-8 h-8 sm:w-9 sm:h-9 mb-3 sm:mb-4 flex items-center justify-center
                 rounded-md bg-white text-primaryDark text-sm sm:text-base"
        >
          ◎
        </div>
        <h4 class="font-semibold text-base sm:text-lg mb-2">
          ExplainFlags AI (LLM Root-Cause + Insights)
        </h4>
        <p class="text-white/80 text-xs sm:text-sm leading-relaxed">
          Understand issues instantly with AI-generated, plain-language
          insights tied to your flags.
        </p>
      </div>

      <!-- Card -->
      <div
        class="border border-white/20 rounded-xl p-5 sm:p-6
               bg-white/5 backdrop-blur-md"
      >
        <div
          class="w-8 h-8 sm:w-9 sm:h-9 mb-3 sm:mb-4 flex items-center justify-center
                 rounded-md bg-white text-primaryDark text-sm sm:text-base"
        >
          ↗
        </div>
        <h4 class="font-semibold text-base sm:text-lg mb-2">
          AutoSegment AI (Behavioral Segmentation)
        </h4>
        <p class="text-white/80 text-xs sm:text-sm leading-relaxed">
          Target the right users automatically. AI builds segments from
          live behavior—no manual rules.
        </p>
      </div>
    </div>

    <!-- Enterprise Only -->
    <p class="text-center text-accent font-semibold mt-8 sm:mt-10 text-sm sm:text-base">
      Enterprise Only
    </p>

    <!-- Bottom CTA -->
    <div
      class="mt-8 sm:mt-10 max-w-5xl mx-auto flex flex-col md:flex-row
             items-center justify-between gap-4
             border border-white/20 rounded-xl p-4 sm:p-5
             bg-white/5 backdrop-blur-md"
    >
      <p class="text-white/90 font-medium text-sm sm:text-base text-center md:text-left">
        <span class="text-accent"> Be The First </span> To Try Out Our New AI Features.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter email address"
          class="px-3 sm:px-4 py-2 rounded-md bg-white/10
                 border border-white/20 text-white placeholder-white/60
                 focus:outline-none text-sm w-full sm:w-auto"
        />
        <button
          class="bg-accent text-primaryDark px-4 sm:px-5 py-2
                 rounded-md font-semibold text-sm sm:text-base whitespace-nowrap"
        >
          Join AI Early Access
        </button>
      </div>
    </div>
  </div>
</section>


<section class="bg-mutedBg py-16 sm:py-20 md:py-28">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center">

    <!-- Heading -->
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-tableHeader mb-10 sm:mb-12">
      Plans Built For Every Stage Of Growth
    </h2>

    <!-- Price Card -->
    <div class="flex flex-col items-center mb-10 sm:mb-12 md:mb-14">
      <div
        class="w-[240px] sm:w-[260px] md:w-[280px] rounded-xl bg-gradient-to-b
               from-primary to-primaryDark
               text-white py-6 sm:py-7 md:py-8 shadow-lg"
      >
        <p class="text-xs sm:text-sm opacity-90 mb-2">
          Prices starts at
        </p>

        <div class="flex items-baseline justify-center gap-2">
          <span class="text-4xl sm:text-5xl font-bold">$10</span>
          <span class="text-base sm:text-lg opacity-80">/month</span>
        </div>
      </div>

      <button
        class="mt-5 sm:mt-6 bg-accent text-primaryDark
               px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base
               hover:brightness-105 transition"
      >
        View Subscription Details
      </button>
    </div>

    <!-- Free Sandbox CTA -->
    <div
      class="bg-white rounded-xl border border-black/10
             shadow-sm px-6 sm:px-8 md:px-10 py-6 sm:py-7 md:py-8
             flex flex-col md:flex-row
             items-center justify-between gap-5 sm:gap-6"
    >
      <div class="text-center md:text-left">
        <h3 class="text-lg sm:text-xl font-semibold text-tableHeader mb-1">
          Start Your 7-Day Free Sandbox Plan
        </h3>
        <p class="text-gray-500 text-xs sm:text-sm">
          Join over 1,000+ startups already growing with Untitled.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
        <button
          class="bg-accent text-primaryDark
                 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base
                 hover:brightness-105 transition"
        >
          Get Started
        </button>

        <button
          class="border border-accent text-accent
                 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base
                 hover:bg-accent/10 transition"
        >
          Learn More
        </button>
      </div>
    </div>

  </div>
</section>

<section class="py-16 sm:py-20 md:py-28 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center">

    <!-- Heading -->
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-tableHeader mb-12 sm:mb-16 md:mb-20">
      Why Teams Use IntelliToggle
    </h2>

    <!-- Feature Cards -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 md:gap-20 mb-12 sm:mb-14 md:mb-16">

      <!-- Card 1 -->
      <div class="text-center">
        <div
          class="mx-auto mb-5 sm:mb-6 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl
                 bg-mutedBg border border-primary/40
                 flex items-center justify-center"
        >
          <img src="/public/rollout.png" alt="" class="w-6 h-6 sm:w-7 sm:h-7" />
        </div>

        <h4 class="text-base sm:text-lg font-semibold text-tableHeader mb-2">
          Safer, faster rollouts
        </h4>

        <p class="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
          Control feature releases in minutes, not weeks
          without risking production stability.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="text-center">
        <div
          class="mx-auto mb-5 sm:mb-6 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl
                 bg-mutedBg border border-primary/40
                 flex items-center justify-center"
        >
          <img src="/public/confidence.png" alt="" class="w-6 h-6 sm:w-7 sm:h-7" />
        </div>

        <h4 class="text-base sm:text-lg font-semibold text-tableHeader mb-2">
          Confidence to ship
        </h4>

        <p class="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
          "Flip, target, and roll back. Engineers ship more
          often knowing they can undo mistakes."
        </p>
      </div>

      <!-- Card 3 -->
      <div class="text-center">
        <div
          class="mx-auto mb-5 sm:mb-6 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl
                 bg-mutedBg border border-primary/40
                 flex items-center justify-center"
        >
          <img src="/public/ai.png" alt="" class="w-6 h-6 sm:w-7 sm:h-7" />
        </div>

        <h4 class="text-base sm:text-lg font-semibold text-tableHeader mb-2">
          Future-ready with AI delivery
        </h4>

        <p class="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
          Built for Dart workflows and already prepared
          for AI-powered rollout automation tomorrow.
        </p>
      </div>

    </div>

    <!-- Case Study CTA -->
    <div
      class="max-w-5xl mx-auto
             bg-mutedBg border border-primary/30
             rounded-xl px-5 sm:px-6 md:px-8 py-4 sm:py-5
             flex flex-col md:flex-row
             items-center justify-between gap-4 sm:gap-5 md:gap-6"
    >
      <p class="text-tableHeader font-medium text-center md:text-left text-sm sm:text-base">
        <span class="font-semibold">
          Read a 2-min case note:
        </span>
        <span class="text-gray-600">
          How a sample Flutter app shipped faster with IntelliToggle
        </span>
      </p>

      <button
        class="bg-accent text-primaryDark
               px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base
               hover:brightness-105 transition whitespace-nowrap"
      >
        Read Now
      </button>
    </div>

  </div>
</section>


  <!-- FINAL CTA -->
<section class="py-16 sm:py-20 md:py-28 px-4 sm:px-6">
  <div
    class="relative max-w-6xl mx-auto rounded-2xl overflow-hidden
           bg-gradient-to-r from-primary via-primary to-primaryDark
           shadow-2xl"
  >
    <!-- subtle grid / pixel texture -->
    <div
      class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
             bg-[size:40px_40px]"
    ></div>

    <!-- content -->
    <div class="relative px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-14 md:py-16 text-center text-white">
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-3 sm:mb-4"
      >
        Launch Features Confidently With AI<br class="hidden sm:block" />
        Driven Feature Flags
      </h2>

      <p
        class="text-sm sm:text-base md:text-lg text-white/85 mb-8 sm:mb-10"
      >
        Start for free, scale as your team grows
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 md:gap-6">
        <!-- Primary -->
        <button
          class="w-full sm:w-auto sm:min-w-[200px] md:min-w-[220px] bg-accent text-primaryDark
                 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-sm sm:text-base
                 shadow-md hover:shadow-lg transition"
        >
          Start for $1/mo
        </button>

        <!-- Secondary -->
        <button
          class="w-full sm:w-auto sm:min-w-[200px] md:min-w-[220px] border border-accent text-accent
                 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-sm sm:text-base
                 hover:bg-accent hover:text-primaryDark transition"
        >
          Join AI Early Access
        </button>
      </div>
    </div>
  </div>
</section>


  <Footer />
</template>