<template>
  <footer class="bg-mutedBg pt-20 pb-12">
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14 text-sm text-[#6B6F8A]"
    >
      <!-- Brand -->
      <div>
        <img
          src="/logos/PurpleBlue.png"
          alt="IntelliToggle"
          class="h-8 mb-5"
        />

        <p class="leading-relaxed max-w-xs">
          IntelliToggle is built by AORTEM, a company focused on powering
          scalable, multi-platform developer tools.
        </p>

        <!-- Github icon placeholder (as in image) -->
        <div class="mt-6">
          <div
            class="w-8 h-8 rounded-full bg-[#2C2F4A] flex items-center justify-center"
          >
            <svg
              class="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.53-1.36-1.29-1.72-1.29-1.72-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.79 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.58.24 2.74.12 3.03.74.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16v3.21c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Resources -->
      <div>
        <h4 class="text-[#1F2340] font-semibold mb-5">
          Resources
        </h4>
        <ul class="space-y-3">
          <li>Why IntelliToggle Is Different</li>
          <li>Customer Support</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h4 class="text-[#1F2340] font-semibold mb-5">
          Company
        </h4>
        <ul class="space-y-3">
          <li>Pricing</li>
          <li>Documentation</li>
          <li>About Us</li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h4 class="text-[#1F2340] font-semibold mb-5">
          Subscribe to Newsletter
        </h4>

        <div class="flex w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter email address"
            class="flex-1 px-4 py-3 rounded-l-md border border-[#E3E5F1] focus:outline-none text-sm"
          />
          <button
            class="bg-accent px-6 py-3 rounded-r-md font-semibold text-[#1F2340]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
