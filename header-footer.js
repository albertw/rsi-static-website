// Dynamic header and footer inclusion for Radio Scouting Ireland

document.addEventListener('DOMContentLoaded', function() {
    // Inject Header
    const headerHTML = `
    <header class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-rsi-green to-rsi-light shadow-lg">
        <div class="container mx-auto px-4 py-3">
            <div class="flex items-center justify-between">
                <a href="index.html" class="flex items-center space-x-3">
                    <img src="images/rsilogo.jpeg" alt="Radio Scouting Ireland Logo" class="h-20 w-auto">
                    <span class="text-white font-bold text-lg hidden sm:block">Radio Scouting Ireland</span>
                </a>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="md:hidden text-white p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <!-- Navigation -->
                <nav id="nav-menu" class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-white hover:text-rsi-accent transition-colors duration-300 font-medium">Home</a>
                    <a href="resources.html" class="text-white hover:text-rsi-accent transition-colors duration-300 font-medium">Resources</a>
                </nav>
            </div>

            <!-- Mobile Navigation -->
            <nav id="mobile-nav" class="hidden md:hidden mt-4 pb-4">
                <a href="index.html" class="block py-2 text-white hover:text-rsi-accent transition-colors duration-300">Home</a>
                <a href="resources.html" class="block py-2 text-white hover:text-rsi-accent transition-colors duration-300">Resources</a>
            </nav>
        </div>
    </header>
    `;

    // Inject Footer
    const footerHTML = `
    <footer class="bg-rsi-dark text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-lg font-bold mb-4">Navigation</h3>
                    <ul class="space-y-2">
                        <li><a href="index.html" class="text-gray-300 hover:text-white transition-colors">Home</a></li>
                        <li><a href="resources.html" class="text-gray-300 hover:text-white transition-colors">Resources</a></li>
                    </ul>
                </div>
                <div class="flex flex-col items-center md:items-start">
                    <img src="images/rsilogo.jpeg" alt="Radio Scouting Ireland Logo" class="h-24 w-auto mb-4">
                    <p class="text-gray-400 text-sm">Promoting Amateur Radio and STEM activities in scouting across Ireland</p>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-4">Contact</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li><a href="https://www.facebook.com/radioscoutingireland" class="hover:text-white transition-colors">Facebook</a></li>
                        <li><a href="https://www.idonate.ie/radioscoutingireland" class="hover:text-white transition-colors">Donate</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                <p>&copy; 2026 Radio Scouting Ireland. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    // Insert header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Insert footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Initialize mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
        });
    }
});