<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <!-- HERO -->
  <section
  class="relative bg-gradient-to-br from-primary via-primary to-primaryDark
         min-h-screen text-white overflow-hidden"
>
  <Header />

  <!-- HERO CONTENT -->
  <div class="pt-44 text-center px-6 relative z-10">
    <h1 class="text-4xl md:text-[56px] font-bold leading-tight tracking-tight">
      The First
      <span
        class="inline-block mx-2 px-3 py-1 rounded-md
               bg-accent text-primaryDark text-[0.9em] font-semibold"
      >
        Dart-Native
      </span>
      Feature Flag
      <br />
      With DartCodeAI
    </h1>

    <p class="mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/90">
      Feature flags built for Dart. Ship faster, roll back
      <br />
      safely, and scale with AI-powered delivery
    </p>

    <p class="mt-3 text-accent font-semibold text-base">
      Starting at just $1/month
    </p>

    <p class="mt-3 text-xs text-white/70">
      Valid till 15th September, 2025
    </p>

    <div class="mt-8 flex justify-center gap-4">
      <!-- Primary CTA -->
      <button
        class="bg-accent text-primaryDark px-6 py-2.5 rounded-md
               font-semibold text-sm hover:opacity-90 transition"
      >
        Get Access
      </button>

      <!-- Secondary CTA -->
      <button
        class="border border-accent text-accent px-6 py-2.5
               rounded-md font-semibold text-sm transition hover:bg-accent hover:text-black"
      >
        Join AI Early Access
      </button>
    </div>
  </div>

  <!-- HERO IMAGE -->
  <div class="relative z-10 mt-20 max-w-6xl mx-auto px-6">
    <img
      src="/public/dashboard.png"
      alt="Dashboard"
      class="rounded-xl shadow-2xl mx-auto"
    />
  </div>

  <!-- ANGLED WHITE CUT -->
  <div
    class="absolute bottom-0 right-0 w-full h-40 bg-white
           clip-path-hero"
  ></div>
</section>


  <!-- TRUST -->
<section class="py-20 text-center">
  <p class="font-semibold text-[30px] text-[#1F2340] mb-12">
    Trusted by various engineering teams
  </p>

  <div class="flex justify-center items-center gap-16 flex-wrap">
    <img
      src="/public/gcp.png"
      alt="Google Cloud"
      class="h-12 opacity-90"
    />

    <img
      src="/public/aws.png"
      alt="Amazon Web Services"
      class="h-12 opacity-90"
    />

    <img
      src="/public/azure.png"
      alt="Microsoft Azure"
      class="h-12 opacity-90"
    />

    <img
      src="/public/digitalocean.png"
      alt="DigitalOcean"
      class="h-12 opacity-90"
    />

    <img
      src="/public/ibm.png"
      alt="IBM"
      class="h-12 opacity-90"
    />
  </div>
</section>


  <!-- WHAT IS IntelliToggle -->
<section class="py-28 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Section Title -->
    <h2
      class="text-center text-[28px] md:text-[32px] font-semibold text-primaryDark mb-16"
    >
      What Is IntelliToggle
    </h2>

    <!-- Content -->
    <div class="grid md:grid-cols-2 gap-16 items-center">
      <!-- LEFT: Text -->
      <div>
        <h3
          class="text-[26px] md:text-[30px] font-semibold text-gray-900 leading-snug"
        >
          Your AI Dart App’s Control Panel For
          <br />
          Feature Releases
        </h3>

        <p class="mt-5 text-gray-600 leading-relaxed max-w-lg">
          IntelliToggle is a “Dart-Powered” feature flag that lets you turn
          features on/off instantly in your application without redeploying
          code. It allows you control roll-outs, run experiments, and fix bugs
          faster.
        </p>

        <div class="mt-6">
          <p class="font-semibold text-gray-900 mb-2">Benefits</p>
          <ul class="space-y-2 text-gray-600 list-disc ml-5">
            <li>Toggle new features without app updates</li>
            <li>Roll out to specific users or regions</li>
            <li>Instantly rollback when needed</li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Dashboard Image -->
      <div class="relative">
        <div
          class="rounded-2xl bg-gradient-to-br from-primary to-primaryDark p-[10px]"
        >
          <img
            src="/feature-dashboard.png"
            alt="IntelliToggle Dashboard"
            class="rounded-xl bg-white shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</section>


<!-- OPEN FEATURE -->
<section class="bg-mutedBg py-28">
  <div
    class="max-w-7xl mx-auto px-6
           grid md:grid-cols-2 gap-20 items-center"
  >

    <!-- Logo Card -->
    <div
      class="bg-white rounded-2xl
             border border-primary/30
             h-[420px]
             flex items-center justify-center"
    >
      <img
        src="/public/open-feature.png"
        alt="OpenFeature"
        class="max-w-[260px]"
      />
    </div>

    <!-- Content -->
    <div class="max-w-xl">
      <h3
        class="text-2xl md:text-3xl font-semibold
               text-tableHeader mb-5"
      >
        Seamless Feature Management with OpenFeature
      </h3>

      <p
        class="text-gray-500 leading-relaxed mb-8"
      >
        Aortem now integrates with OpenFeature to provide developers
        with a powerful, standardized approach to feature flagging and
        dynamic configuration. Ship features faster, test safely, and
        optimize user experiences effortlessly.
      </p>

      <button
        class="inline-flex items-center gap-2
               bg-accent text-primaryDark
               px-6 py-3 rounded-md
               font-semibold
               hover:brightness-105 transition"
      >
        Learn More
        <span class="text-lg">→</span>
      </button>
    </div>

  </div>
</section>


  <!-- CONTROL & POWER -->
<section class="py-28 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Title -->
    <h2
      class="text-center text-[28px] md:text-[32px] font-semibold text-primaryDark mb-16"
    >
      Control & Power-focused
    </h2>

    <!-- Cards -->
    <div class="grid md:grid-cols-3 gap-14">
      <!-- Card 1 -->
      <div>
        <div
          class="rounded-2xl bg-white p-3"
        >
          <img
            src="/connect.png"
            alt="Connect"
            class="rounded-xl w-full"
          />
        </div>

        <h4 class="mt-6 text-lg font-semibold text-gray-900">
          Connect
        </h4>
        <p class="mt-2 text-gray-600 text-sm max-w-xs">
          Install SDK in your Dart project in 2 mins.
        </p>

        <button
          class="mt-4 inline-block border border-accent text-accent
                 px-5 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-black"
        >
          View Documentation
        </button>
      </div>

      <!-- Card 2 -->
      <div>
        <div
          class="rounded-2xl bg-white p-3"
        >
          <img
            src="/flags.png"
            alt="Create Flags"
            class="rounded-xl w-full"
          />
        </div>

        <h4 class="mt-6 text-lg font-semibold text-gray-900">
          Create Flags
        </h4>
        <p class="mt-2 text-gray-600 text-sm max-w-xs">
          Define features in IntelliToggle dashboard.
        </p>

        <button
          class="mt-4 inline-block border border-accent text-accent
                 px-5 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-black"
        >
          View Documentation
        </button>
      </div>

      <!-- Card 3 -->
      <div>
        <div
          class="rounded-2xl bg-white p-3"
        >
          <img
            src="/ship.png"
            alt="Ship & Control"
            class="rounded-xl w-full"
          />
        </div>

        <h4 class="mt-6 text-lg font-semibold text-gray-900">
          Ship & Control
        </h4>
        <p class="mt-2 text-gray-600 text-sm max-w-xs">
          Flip switches anytime, see instant results.
        </p>

        <button
          class="mt-4 inline-block border border-accent text-accent
                 px-5 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-black"
        >
          View Documentation
        </button>
      </div>
    </div>
  </div>
</section>

<!-- DART-POWERED FEATURE FLAG -->
<section class="py-28 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Title -->
    <h2
      class="text-center text-[28px] md:text-[32px] font-semibold text-primaryDark"
    >
      Dart-Powered Feature Flag
    </h2>

    <!-- Subtitle -->
    <h3
      class="mt-4 text-center text-xl md:text-2xl font-semibold text-gray-900"
    >
      Not Another Generic Feature Flag Tool
    </h3>

    <p
      class="mt-3 text-center text-gray-600 max-w-3xl mx-auto leading-relaxed"
    >
      Most tools are built for every language, which means extra layers and
      slower toggles. IntelliToggle is built in Dart, for Dart — so it’s faster,
      safer, and built for your stack.
    </p>

    <!-- Table -->
    <div class="mt-14 overflow-hidden rounded-xl border border-gray-200">
      <!-- Header -->
      <div
        class="grid grid-cols-3 bg-gradient-to-b from-primary to-primaryDark
               text-white text-sm font-semibold"
      >
        <div class="px-6 py-4">Features</div>
        <div class="px-6 py-4 text-center">IntelliToggle</div>
        <div class="px-6 py-4 text-center">Other Feature Flag</div>
      </div>

      <!-- Rows -->
      <div class="bg-mutedBg text-sm">
        <!-- Row 1 -->
        <div class="grid grid-cols-3 px-6 py-4">
          <div class="text-gray-700">Dart-native SDK & server</div>
          <div class="text-center text-gray-900">✓</div>
          <div class="text-center text-gray-500">×</div>
        </div>

        <!-- Row 2 -->
        <div class="grid grid-cols-3 px-6 py-4">
          <div class="text-gray-700">End-to-end type safety</div>
          <div class="text-center text-gray-900">✓</div>
          <div class="text-center text-gray-500">×</div>
        </div>

        <!-- Row 3 -->
        <div class="grid grid-cols-3 px-6 py-4">
          <div class="text-gray-700">AI-assisted roll-outs & cleanup</div>
          <div class="text-center text-gray-900">✓</div>
          <div class="text-center text-gray-500">×</div>
        </div>

        <!-- Row 4 -->
        <div class="grid grid-cols-3 px-6 py-4">
          <div class="text-gray-700">A/B testing built-in</div>
          <div class="text-center text-gray-900">✓</div>
          <div class="text-center text-gray-500">×</div>
        </div>

        <!-- Row 5 -->
        <div class="grid grid-cols-3 px-6 py-4">
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
  class="relative py-28 text-white overflow-hidden
         bg-gradient-to-br from-primary via-primary to-primaryDark"
>
  <!-- Background circuit image -->
  <div
    class="absolute inset-0 bg-[url('/ai-bg.png')] bg-cover bg-center"
  ></div>

  <!-- Dark overlay -->
  <div class="absolute inset-0 bg-primaryDark/80"></div>

  <!-- Content -->
  <div class="relative max-w-7xl mx-auto px-6">
    <!-- Badge -->
    <div class="flex justify-center mb-6">
      <span
        class="bg-accent text-primaryDark px-4 py-1 rounded-full
               text-sm font-semibold"
      >
        Coming Soon
      </span>
    </div>

    <!-- Title -->
    <h2
      class="text-center text-[28px] md:text-[32px] font-semibold mb-14"
    >
      DartCodeAI That Actually Changes Flagging
    </h2>

    <!-- Feature Cards -->
    <div class="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      <!-- Card -->
      <div
        class="border border-white/20 rounded-xl p-6
               bg-white/5 backdrop-blur-md"
      >
        <div
          class="w-9 h-9 mb-4 flex items-center justify-center
                 rounded-md bg-white text-primaryDark"
        >
          ▶
        </div>
        <h4 class="font-semibold text-lg mb-2">
          AutoFlag AI (LLM-Assisted Flag Creation)
        </h4>
        <p class="text-white/80 text-sm leading-relaxed">
          Create new flags just by typing what you need. The AI names it,
          sets rules, and configures targeting for you.
        </p>
      </div>

      <!-- Card -->
      <div
        class="border border-white/20 rounded-xl p-6
               bg-white/5 backdrop-blur-md"
      >
        <div
          class="w-9 h-9 mb-4 flex items-center justify-center
                 rounded-md bg-white text-primaryDark"
        >
          ☁
        </div>
        <h4 class="font-semibold text-lg mb-2">
          SmartRamp AI (AI-Driven Rollout Optimization)
        </h4>
        <p class="text-white/80 text-sm leading-relaxed">
          Rollouts that adjust themselves. AI expands, pauses, or rolls back
          based on real-time metrics.
        </p>
      </div>

      <!-- Card -->
      <div
        class="border border-white/20 rounded-xl p-6
               bg-white/5 backdrop-blur-md"
      >
        <div
          class="w-9 h-9 mb-4 flex items-center justify-center
                 rounded-md bg-white text-primaryDark"
        >
          ◎
        </div>
        <h4 class="font-semibold text-lg mb-2">
          ExplainFlags AI (LLM Root-Cause + Insights)
        </h4>
        <p class="text-white/80 text-sm leading-relaxed">
          Understand issues instantly with AI-generated, plain-language
          insights tied to your flags.
        </p>
      </div>

      <!-- Card -->
      <div
        class="border border-white/20 rounded-xl p-6
               bg-white/5 backdrop-blur-md"
      >
        <div
          class="w-9 h-9 mb-4 flex items-center justify-center
                 rounded-md bg-white text-primaryDark"
        >
          ↗
        </div>
        <h4 class="font-semibold text-lg mb-2">
          AutoSegment AI (Behavioral Segmentation)
        </h4>
        <p class="text-white/80 text-sm leading-relaxed">
          Target the right users automatically. AI builds segments from
          live behavior—no manual rules.
        </p>
      </div>
    </div>

    <!-- Enterprise Only -->
    <p class="text-center text-accent font-semibold mt-10">
      Enterprise Only
    </p>

    <!-- Bottom CTA -->
    <div
      class="mt-10 max-w-5xl mx-auto flex flex-col md:flex-row
             items-center justify-between gap-4
             border border-white/20 rounded-xl p-5
             bg-white/5 backdrop-blur-md"
    >
      <p class="text-white/90 font-medium">
        <span class="text-accent"> Be The First </span> To Try Out Our New AI Features.
      </p>

      <div class="flex gap-3 w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter email address"
          class="px-4 py-2 rounded-md bg-white/10
                 border border-white/20 text-white placeholder-white/60
                 focus:outline-none"
        />
        <button
          class="bg-accent text-primaryDark px-5 py-2
                 rounded-md font-semibold"
        >
          Join AI Early Access
        </button>
      </div>
    </div>
  </div>
</section>


<section class="bg-mutedBg py-28">
  <div class="max-w-5xl mx-auto px-6 text-center">

    <!-- Heading -->
    <h2 class="text-3xl md:text-4xl font-semibold text-tableHeader mb-12">
      Plans Built For Every Stage Of Growth
    </h2>

    <!-- Price Card -->
    <div class="flex flex-col items-center mb-14">
      <div
        class="w-[280px] rounded-xl bg-gradient-to-b
               from-primary to-primaryDark
               text-white py-8 shadow-lg"
      >
        <p class="text-sm opacity-90 mb-2">
          Prices starts at
        </p>

        <div class="flex items-baseline justify-center gap-2">
          <span class="text-5xl font-bold">$10</span>
          <span class="text-lg opacity-80">/month</span>
        </div>
      </div>

      <button
        class="mt-6 bg-accent text-primaryDark
               px-8 py-3 rounded-md font-semibold
               hover:brightness-105 transition"
      >
        View Subscription Details
      </button>
    </div>

    <!-- Free Sandbox CTA -->
    <div
      class="bg-white rounded-xl border border-black/10
             shadow-sm px-10 py-8
             flex flex-col md:flex-row
             items-center justify-between gap-6"
    >
      <div class="text-left">
        <h3 class="text-xl font-semibold text-tableHeader mb-1">
          Start Your 7-Day Free Sandbox Plan
        </h3>
        <p class="text-gray-500 text-sm">
          Join over 1,000+ startups already growing with Untitled.
        </p>
      </div>

      <div class="flex gap-4">
        <button
          class="bg-accent text-primaryDark
                 px-6 py-3 rounded-md font-semibold
                 hover:brightness-105 transition"
        >
          Get Started
        </button>

        <button
          class="border border-accent text-accent
                 px-6 py-3 rounded-md font-semibold
                 hover:bg-accent/10 transition"
        >
          Learn More
        </button>
      </div>
    </div>

  </div>
</section>

<section class="py-28 bg-white">
  <div class="max-w-7xl mx-auto px-6 text-center">

    <!-- Heading -->
    <h2 class="text-3xl md:text-4xl font-semibold text-tableHeader mb-20">
      Why Teams Use IntelliToggle
    </h2>

    <!-- Feature Cards -->
    <div class="grid md:grid-cols-3 gap-20 mb-16">

      <!-- Card 1 -->
      <div class="text-center">
        <div
          class="mx-auto mb-6 w-20 h-20 rounded-xl
                 bg-mutedBg border border-primary/40
                 flex items-center justify-center"
        >
          <img src="/public/rollout.png" alt="" class="w-7 h-7" />
        </div>

        <h4 class="text-lg font-semibold text-tableHeader mb-2">
          Safer, faster rollouts
        </h4>

        <p class="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
          Control feature releases in minutes, not weeks
          without risking production stability.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="text-center">
        <div
          class="mx-auto mb-6 w-20 h-20 rounded-xl
                 bg-mutedBg border border-primary/40
                 flex items-center justify-center"
        >
          <img src="/public/confidence.png" alt="" class="w-7 h-7" />
        </div>

        <h4 class="text-lg font-semibold text-tableHeader mb-2">
          Confidence to ship
        </h4>

        <p class="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
          “Flip, target, and roll back. Engineers ship more
          often knowing they can undo mistakes.”
        </p>
      </div>

      <!-- Card 3 -->
      <div class="text-center">
        <div
          class="mx-auto mb-6 w-20 h-20 rounded-xl
                 bg-mutedBg border border-primary/40
                 flex items-center justify-center"
        >
          <img src="/public/ai.png" alt="" class="w-7 h-7" />
        </div>

        <h4 class="text-lg font-semibold text-tableHeader mb-2">
          Future-ready with AI delivery
        </h4>

        <p class="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
          Built for Dart workflows and already prepared
          for AI-powered rollout automation tomorrow.
        </p>
      </div>

    </div>

    <!-- Case Study CTA -->
    <div
      class="max-w-5xl mx-auto
             bg-mutedBg border border-primary/30
             rounded-xl px-8 py-5
             flex flex-col md:flex-row
             items-center justify-between gap-6"
    >
      <p class="text-tableHeader font-medium text-left">
        <span class="font-semibold">
          Read a 2-min case note:
        </span>
        <span class="text-gray-600">
          How a sample Flutter app shipped faster with IntelliToggle
        </span>
      </p>

      <button
        class="bg-accent text-primaryDark
               px-6 py-3 rounded-md font-semibold
               hover:brightness-105 transition"
      >
        Read Now
      </button>
    </div>

  </div>
</section>


  <!-- FINAL CTA -->
  <section class="py-24">
    <div
      class="max-w-6xl mx-auto bg-gradient-to-r from-primary to-primaryDark text-white rounded-xl p-16 text-center"
    >
      <h2 class="text-3xl font-bold mb-4">
        Launch Features Confidently With AI Driven Feature Flags
      </h2>
      <p class="opacity-90 mb-8">
        Start for free, scale as your team grows
      </p>

      <div class="flex justify-center gap-4">
        <button class="bg-accent text-black px-6 py-3 rounded-md font-semibold">
          Start for $1/mo
        </button>
        <button class="border border-accent px-6 py-3 rounded-md hover:bg-accent hover:text-black font-semibold">
          Join AI Early Access
        </button>
      </div>
    </div>
  </section>

  <Footer />
</template>
