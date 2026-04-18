/**
 * PropManage Pro - Next.js Aesthetic + Real Estate Cinematic Integration
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Floating Pill Navbar Scroll
    const initNavbar = () => {
        const navbar = document.querySelector('.navbar-geist');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    };

    // 2. Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 50
        });
    }

    // 3. Cinematic Hero Background Swiper
    if (typeof Swiper !== 'undefined' && document.querySelector('.background-swiper')) {
        new Swiper('.background-swiper', {
            loop: true,
            effect: 'fade', // beautiful cinema fade
            speed: 2000,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            allowTouchMove: false // it's just a background
        });
    }

    // 4. Initialize Swiper for Property Showcase
    if (typeof Swiper !== 'undefined' && document.querySelector('.swiper-geist')) {
        new Swiper('.swiper-geist', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            speed: 600,
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }

    // 5. Functional Interactive Tabs (Features)
    const initFeatureTabs = () => {
        const buttons = document.querySelectorAll('.feature-nav-btn');
        const panes = document.querySelectorAll('.feature-pane');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active from all
                buttons.forEach(b => b.classList.remove('active'));
                panes.forEach(p => p.classList.remove('active'));
                
                // Add active to current
                btn.classList.add('active');
                const targetId = btn.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
            });
        });
    };

    // 6. Initialize ApexCharts (Imperial Navy Style)
    const initCharts = () => {
        // 1. Financial Performance Chart (Bar)
        const revenueExpenseElement = document.querySelector("#revenueExpenseChart");
        if (revenueExpenseElement && typeof ApexCharts !== 'undefined') {
            const options = {
                series: [{
                    name: 'Revenue',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 75, 80]
                }, {
                    name: 'Expense',
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 45, 42, 44]
                }],
                chart: {
                    type: 'bar',
                    height: 350,
                    fontFamily: 'Inter, sans-serif',
                    toolbar: { show: false }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        borderRadius: 4
                    },
                },
                dataLabels: { enabled: false },
                stroke: { show: true, width: 2, colors: ['transparent'] },
                colors: ['#1E3A5F', '#cbd5e1'], // Navy and Slate
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                yaxis: {
                    title: { text: '$ (thousands)' },
                    labels: { formatter: (val) => val + "k" }
                },
                fill: { opacity: 1 },
                tooltip: {
                    y: { formatter: (val) => "$ " + val + " thousands" }
                },
                grid: { borderColor: '#f1f5f9' }
            };

            new ApexCharts(revenueExpenseElement, options).render();
        }


        // 3. Occupancy Donut Chart
        const occupancyDonutElement = document.querySelector("#occupancyDonutChart");
        if (occupancyDonutElement && typeof ApexCharts !== 'undefined') {
            const options = {
                series: [84, 50, 8],
                chart: {
                    type: 'donut',
                    height: 200,
                    fontFamily: 'Inter, sans-serif',
                },
                labels: ['Sold', 'Rented', 'Vacant'],
                colors: ['#1E3A5F', '#10b981', '#f59e0b'],
                legend: { position: 'bottom', fontSize: '10px' },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '75%',
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    label: 'Total',
                                    formatter: () => '142'
                                }
                            }
                        }
                    }
                },
                dataLabels: { enabled: false }
            };

            new ApexCharts(occupancyDonutElement, options).render();
        }

        // 4. Units Consumption Pulse (New Area Chart)
        const unitConsumptionElement = document.querySelector("#unitConsumptionChart");
        if (unitConsumptionElement && typeof ApexCharts !== 'undefined') {
            setTimeout(() => {
                const options = {
                    series: [{
                        name: 'Grid Demand',
                        data: [42, 58, 72, 51, 88, 98, 65]
                    }],
                    chart: {
                        type: 'area',
                        height: 180,
                        sparkline: { enabled: true },
                        animations: { enabled: true, easing: 'easeinout', speed: 1000 },
                        background: 'transparent'
                    },
                    stroke: { curve: 'smooth', width: 3, colors: ['#2B7BE8'] },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shadeIntensity: 1,
                            opacityFrom: 0.45,
                            opacityTo: 0.05,
                            stops: [20, 100]
                        }
                    },
                    colors: ['#2B7BE8'],
                    tooltip: {
                        theme: 'dark',
                        x: { show: false },
                        y: { formatter: (val) => val + " kW" }
                    }
                };
                new ApexCharts(unitConsumptionElement, options).render();
            }, 500);
        }

        // 5. Tenant Utility Consumption (Dual Series)
        const tenantUtilityElement = document.querySelector("#tenantUtilityChart");
        if (tenantUtilityElement && typeof ApexCharts !== 'undefined') {
            const options = {
                series: [{
                    name: 'Electricity (kWh)',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }, {
                    name: 'Water (kL)',
                    data: [11, 32, 45, 32, 34, 52, 41]
                }],
                chart: {
                    type: 'area',
                    height: 220,
                    toolbar: { show: false },
                    animations: { enabled: true, easing: 'easeinout', speed: 800 }
                },
                stroke: { curve: 'smooth', width: 2 },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [20, 100]
                    }
                },
                colors: ['#2B7BE8', '#10B981'],
                dataLabels: { enabled: false },
                grid: { borderColor: '#f1f5f9', strokeDashArray: 4 },
                xaxis: {
                    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisBorder: { show: false },
                    labels: { style: { colors: '#94a3b8', fontSize: '10px' } }
                },
                yaxis: { labels: { style: { colors: '#94a3b8', fontSize: '10px' } } },
                legend: { position: 'top', horizontalAlign: 'right', fontSize: '11px' },
                tooltip: { theme: 'dark' }
            };
            new ApexCharts(tenantUtilityElement, options).render();
        }
    };

    // 8. Stats Counter Up Animation
    const initCounters = () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        const startCounter = (counter) => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        };

        // Trigger when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    };

    // 7. Smart Home Toggles interactivity
    const initSmartHomeToggles = () => {
        const toggles = document.querySelectorAll('.geist-switch input');
        toggles.forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                const label = e.target.closest('.d-flex').querySelector('span').innerText;
                const status = e.target.checked ? 'Activated' : 'Deactivated';
                
                // Show notification
                if (window.showToast) {
                    window.showToast('IoT Command', `${label} ${status}`, e.target.checked ? 'success' : 'info');
                }

                // Short pulse visual feedback
                const parentBox = e.target.closest('.bento-card');
                if(parentBox) {
                    parentBox.style.opacity = '0.6';
                    setTimeout(() => { 
                        parentBox.style.opacity = '1'; 
                        parentBox.style.transition = 'opacity 0.3s ease';
                    }, 150);
                }
            });
        });
    };

    // 9. Visitor Pass Generation Logic
    const initVisitorPass = () => {
        const genBtn = document.getElementById('btn-generate-pass');
        const visitorName = document.getElementById('visitor-name');
        const visitorExpiry = document.getElementById('visitor-expiry');
        const visitorCard = document.getElementById('visitor-pass-card');

        if (!genBtn) return;

        genBtn.addEventListener('click', () => {
            const originalText = genBtn.innerText;
            genBtn.disabled = true;
            genBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Generating...';

            // Simulate server-side generation
            setTimeout(() => {
                const names = ['Sarah Jenkins', 'Michael Ross', 'Elena Gilbert', 'David Miller', 'Jessica Pearson'];
                const randomName = names[Math.floor(Math.random() * names.length)];
                
                if (visitorName) visitorName.innerText = `Guest Pass: ${randomName}`;
                if (visitorExpiry) visitorExpiry.innerText = `Expires in 23h 59m`;
                
                // Visual feedback on the card
                if (visitorCard) {
                    visitorCard.style.transform = 'scale(1.02)';
                    visitorCard.style.borderColor = 'var(--accent-blue)';
                    setTimeout(() => {
                        visitorCard.style.transform = 'scale(1)';
                        visitorCard.style.borderColor = 'rgba(0,0,0,0.1)';
                    }, 300);
                }

                genBtn.disabled = false;
                genBtn.innerText = originalText;

                if (window.showToast) {
                    window.showToast('Security Node', `Secure pass generated for ${randomName}`, 'success');
                }
            }, 1500);
        });
    };

    // 10. Interactive Notice Board
    const initNoticeBoard = () => {
        const notices = document.querySelectorAll('.interactive-notice');
        notices.forEach(notice => {
            notice.style.cursor = 'pointer';
            notice.addEventListener('click', () => {
                const title = notice.querySelector('p').innerText;
                const detail = notice.getAttribute('data-detail');
                if (window.showToast) {
                    window.showToast(title, detail, 'info');
                }
            });
        });
    };

    // 11. Property Inventory Engine (Filter, Search, Pagination)
    const initPropertyGrid = () => {
        const grid = document.getElementById('property-grid');
        const items = document.querySelectorAll('.prop-item');
        const searchInput = document.getElementById('prop-search');
        const locationSelect = document.getElementById('filter-location');
        const priceSelect = document.getElementById('filter-price');
        const typeChecks = document.querySelectorAll('.filter-type');
        const filterChips = document.querySelectorAll('.filter-chip');
        const pagination = document.getElementById('prop-pagination');

        if (!grid) return;

        let currentFilter = {
            category: grid.getAttribute('data-default-category') || 'all',
            location: 'all',
            price: 'all',
            types: ['apartment', 'commercial'],
            search: '',
            page: 1
        };

        const updateFilters = () => {
            let visibleCount = 0;
            const itemsPerPage = 6;
            const startIndex = (currentFilter.page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            // First, determine which items MATCH the filters (ignoring pagination)
            const matchedItems = [];
            items.forEach(item => {
                const cat = item.getAttribute('data-category');
                const type = item.getAttribute('data-type');
                const loc = item.getAttribute('data-location');
                const price = parseInt(item.getAttribute('data-price'));
                const name = item.querySelector('h5').innerText.toLowerCase();

                let match = true;
                if (currentFilter.category !== 'all') {
                    if (currentFilter.category === 'sale' && cat !== 'sale') match = false;
                    if (currentFilter.category === 'rent' && cat !== 'rent') match = false;
                    if (currentFilter.category === 'apartments' && type !== 'apartment') match = false;
                    if (currentFilter.category === 'commercial' && type !== 'commercial') match = false;
                }
                if (currentFilter.location !== 'all' && loc !== currentFilter.location) match = false;
                if (currentFilter.price !== 'all') {
                    if (currentFilter.price === 'under-50k' && price >= 50000) match = false;
                    if (currentFilter.price === '50k-100k' && (price < 50000 || price > 100000)) match = false;
                    if (currentFilter.price === '1cr-5cr' && (price < 10000000 || price > 50000000)) match = false;
                    if (currentFilter.price === 'over-5cr' && price <= 50000000) match = false;
                }
                if (typeChecks.length > 0 && !currentFilter.types.includes(type)) match = false;
                if (currentFilter.search && !name.includes(currentFilter.search) && !loc.includes(currentFilter.search)) match = false;

                if (match) matchedItems.push(item);
                item.style.display = 'none'; // Hide all initially
            });

            // "No Results" handling
            let emptyMsg = document.getElementById('prop-empty-msg');
            if (matchedItems.length === 0) {
                if (!emptyMsg) {
                    emptyMsg = document.createElement('div');
                    emptyMsg.id = 'prop-empty-msg';
                    emptyMsg.className = 'col-12 text-center py-5';
                    emptyMsg.innerHTML = `
                        <i class="bi bi-search fs-1 text-muted mb-3 d-block"></i>
                        <h4 class="text-primary-navy">No matches found</h4>
                        <p class="text-muted">Try adjusting your filters or search terms.</p>
                        <button class="btn btn-link text-primary" onclick="location.reload()">Reset All</button>
                    `;
                    grid.appendChild(emptyMsg);
                }
            } else if (emptyMsg) {
                emptyMsg.remove();
            }

            // Apply Pagination to matched items
            matchedItems.forEach((item, index) => {
                if (index >= startIndex && index < endIndex) {
                    item.style.display = 'block';
                }
            });

            // Update Pagination UI
            if (pagination) {
                const totalPages = Math.ceil(matchedItems.length / itemsPerPage);
                pagination.style.display = totalPages > 1 ? 'flex' : 'none';
            }

            if (window.AOS) window.AOS.refresh();
        };

        // Event Listeners
        filterChips.forEach(chip => {
            chip.addEventListener('click', () => {
                filterChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                currentFilter.category = chip.innerText.toLowerCase().replace(' ', '-');
                if (currentFilter.category === 'all-properties') currentFilter.category = 'all';
                currentFilter.page = 1; // Reset to page 1
                updateFilters();
            });
        });

        locationSelect?.addEventListener('change', (e) => {
            currentFilter.location = e.target.value;
            currentFilter.page = 1;
            updateFilters();
        });

        priceSelect?.addEventListener('change', (e) => {
            currentFilter.price = e.target.value;
            currentFilter.page = 1;
            updateFilters();
        });

        typeChecks.forEach(check => {
            check.addEventListener('change', () => {
                const activeTypes = [];
                typeChecks.forEach(c => { if(c.checked) activeTypes.push(c.value); });
                currentFilter.types = activeTypes;
                currentFilter.page = 1;
                updateFilters();
            });
        });

        searchInput?.addEventListener('input', (e) => {
            currentFilter.search = e.target.value.toLowerCase();
            currentFilter.page = 1;
            updateFilters();
        });

        pagination?.addEventListener('click', (e) => {
            e.preventDefault();
            const pageItem = e.target.closest('.page-item');
            if (!pageItem || pageItem.classList.contains('disabled')) return;
            
            const action = pageItem.getAttribute('data-page');
            if (action === 'prev') currentFilter.page = Math.max(1, currentFilter.page - 1);
            else if (action === 'next') currentFilter.page++; // Simple increment
            else currentFilter.page = parseInt(action);

            pagination.querySelectorAll('.page-item').forEach(p => {
                p.classList.remove('active');
                if (p.getAttribute('data-page') == currentFilter.page) p.classList.add('active');
            });

            window.scrollTo({ top: 400, behavior: 'smooth' });
            updateFilters();
        });

        updateFilters(); // Initial run
    };

    // 11. Home Page Inventory Filter Logic
    const initInventoryFilter = () => {
        const tabs = document.querySelectorAll('.filter-tab');
        const items = document.querySelectorAll('.inventory-item');
        const container = document.querySelector('.inventory-container');

        if (!tabs.length || !items.length) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const filter = tab.getAttribute('data-filter');

                // Update tab states
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Filter items with a smooth transition
                items.forEach(item => {
                    const cat = item.getAttribute('data-category');
                    const type = item.getAttribute('data-type');
                    
                    let isMatch = false;
                    if (filter === 'all') isMatch = true;
                    else if (filter === 'residential' && type === 'residential') isMatch = true;
                    else if (filter === 'commercial' && type === 'commercial') isMatch = true;
                    else if (filter === 'sale' && cat === 'sale') isMatch = true;
                    else if (filter === 'rent' && cat === 'rent') isMatch = true;

                    if (isMatch) {
                        item.classList.remove('hidden');
                        item.style.display = 'block';
                        // Re-trigger AOS for the appearing items
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.classList.add('hidden');
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 400); // Match CSS transition duration
                    }
                });

                // Refresh AOS to ensure scroll markers are updated
                if (window.AOS) {
                    setTimeout(() => AOS.refresh(), 500);
                }
            });
        });
    };

    // Run Initializers
    initNavbar();
    initFeatureTabs();
    initCharts();
    initSmartHomeToggles();
    initVisitorPass();
    initNoticeBoard();
    initPropertyGrid();
    initInventoryFilter(); // Newly added
    initCounters();
    initDashboardActions();
});

/**
 * IMPERIAL OS - DASHBOARD ACTION ENGINE
 * Handles View, Edit, Delete, and other actions globally.
 */
const initDashboardActions = () => {
    // 1. Create Toast Container if it doesn't exist
    if (!document.querySelector('.geist-toast-container')) {
        const container = document.createElement('div');
        container.className = 'geist-toast-container';
        document.body.appendChild(container);
    }

    // 2. Event Delegation for all action triggers
    document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-action], .btn-light, .btn-geist-secondary, .dropdown-item, .btn-white');
        if (!target) return;

        // Extract action context
        const action = target.getAttribute('data-action') || target.innerText.trim().toLowerCase();
        const title = target.getAttribute('title') || '';
        const id = target.getAttribute('data-id') || 'unspecified';

        // Check if it's a dashboard action
        if (action.includes('edit') || title.includes('Edit') || target.classList.contains('bi-pencil') || target.classList.contains('bi-pencil-square') || target.classList.contains('bi-shield-lock')) {
            e.preventDefault();
            // Complex Edit Form
            const formFields = `
                <div class="row g-3">
                    <div class="col-md-6">
                        <label class="form-label extra-small text-muted fw-bold uppercase">Update Status</label>
                        <select class="form-select rounded-3">
                            <option selected>Active (Good Standing)</option>
                            <option>Warning (Late Dues)</option>
                            <option>Notice Served</option>
                            <option>Eviction Pending</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label extra-small text-muted fw-bold uppercase">Lease Renewal Date</label>
                        <input type="date" class="form-control rounded-3" value="2026-12-24">
                    </div>
                    <div class="col-12">
                        <label class="form-label extra-small text-muted fw-bold uppercase">Operational Note</label>
                        <textarea class="form-control rounded-3 font-monospace small" rows="3" placeholder="Enter reason for modifying this record..."></textarea>
                    </div>
                </div>`;
            showActionModal('Edit & Configure Record', `You are modifying an active database entity. Actions are logged to the audit trail.`, 'Save Changes', 'primary', formFields);
        } 
        else if (action.includes('view') || title.includes('View') || target.classList.contains('bi-eye')) {
            e.preventDefault();
            // Resident / Entity Snapshot Modal
            const formFields = `
                <div class="p-3 bg-light rounded-4 mb-3 border">
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold fs-5" style="width: 50px; height: 50px;">SJ</div>
                        <div>
                            <h5 class="mb-0 fw-bold">Sarah Jenkins</h5>
                            <p class="mb-0 small text-muted"><i class="bi bi-geo-alt me-1"></i> Apt 402 / Imperial Heights</p>
                        </div>
                    </div>
                    <div class="row g-3 mt-1">
                        <div class="col-6">
                            <p class="mb-0 extra-small fw-bold text-muted uppercase">Contact</p>
                            <p class="mb-0 small fw-bold">+880 1712 345 678</p>
                        </div>
                        <div class="col-6">
                            <p class="mb-0 extra-small fw-bold text-muted uppercase">Financial Health</p>
                            <span class="badge bg-success-subtle text-success border border-success-subtle rounded-pill extra-small px-2">Zero Dues</span>
                        </div>
                        <div class="col-6">
                            <p class="mb-0 extra-small fw-bold text-muted uppercase">Lease Start</p>
                            <p class="mb-0 small fw-bold">12 Jan 2024</p>
                        </div>
                         <div class="col-6">
                            <p class="mb-0 extra-small fw-bold text-muted uppercase">Lease Expiry</p>
                            <p class="mb-0 small fw-bold">24 Dec 2026 <span class="text-danger">*</span></p>
                        </div>
                    </div>
                </div>
                <div class="d-flex gap-2 w-100">
                    <button class="btn btn-outline-geist flex-fill shadow-sm-hover"><i class="bi bi-file-earmark-pdf me-2"></i>Lease Deed</button>
                    <button class="btn btn-outline-geist flex-fill shadow-sm-hover"><i class="bi bi-wallet2 me-2"></i>Ledger</button>
                </div>
            `;
            showActionModal('Entity Snapshot', `High-level operational overview for the selected entity.`, 'Close Snapshot', 'primary', formFields);
            
            // Wait to modify the confirm button to act as a dismiss for View
            setTimeout(() => {
                const confirmBtn = document.getElementById('confirmActionBtn');
                if (confirmBtn) {
                    confirmBtn.setAttribute('data-bs-dismiss', 'modal');
                    confirmBtn.innerText = 'Close Overview';
                }
            }, 50);
        }
        else if (action.includes('delete') || action.includes('retire') || action.includes('terminate') || action.includes('archive') || title.includes('Delete') || title.includes('Terminate') || target.classList.contains('bi-trash') || target.classList.contains('bi-trash3') || target.classList.contains('bi-archive') || target.classList.contains('bi-slash-circle') || target.classList.contains('bi-x-circle')) {
            e.preventDefault();
            showActionModal('Confirm Deletion', 'Are you sure you want to remove this record? This action is irreversible and requires Admin clearance.', 'Confirm Delete', 'danger');
        }
        else if (action.includes('message') || action.includes('chat') || action.includes('bell') || title.includes('Message')) {
            e.preventDefault();
             const formFields = `
                <div class="row g-3">
                    <div class="col-12">
                        <label class="form-label extra-small text-muted fw-bold uppercase">Dispatch Channel</label>
                        <select class="form-select rounded-3">
                            <option selected>In-App Portal Notification</option>
                            <option>Secure Email (Registered ID)</option>
                            <option>SMS Text Message</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label class="form-label extra-small text-muted fw-bold uppercase">Message Priority</label>
                        <div class="d-flex gap-2">
                            <input type="radio" class="btn-check" name="priority" id="p-low" autocomplete="off" checked>
                            <label class="btn btn-outline-secondary rounded-pill extra-small px-3" for="p-low">Standard</label>
                            
                            <input type="radio" class="btn-check" name="priority" id="p-high" autocomplete="off">
                            <label class="btn btn-outline-danger rounded-pill extra-small px-3" for="p-high">Urgent</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <label class="form-label extra-small text-muted fw-bold uppercase">Message Body</label>
                        <textarea class="form-control rounded-3 font-monospace small" rows="4" placeholder="Type your secure message..."></textarea>
                    </div>
                </div>`;
            showActionModal('Secure Communication', `Initialize an encrypted dispatch to the stakeholder.`, 'Dispatch Message', 'primary', formFields);
        }
        else if (action === 'generate_invoices') {
            e.preventDefault();
            const formFields = `
                <div class="row g-3">
                    <div class="col-12">
                        <label class="form-label extra-small text-muted fw-bold uppercase">Billing Cycle Month</label>
                        <input type="month" class="form-control rounded-3">
                    </div>
                    <div class="col-12">
                        <label class="form-label extra-small text-muted fw-bold uppercase">Target Property <span class="text-danger">*</span></label>
                        <select class="form-select rounded-3">
                            <option selected>All Buildings (Global Batch)</option>
                            <option>Imperial Residency</option>
                            <option>Skyline Tower</option>
                        </select>
                    </div>
                    <div class="col-12 mt-3 p-3 bg-light rounded-3 border">
                        <div class="form-check form-switch geist-switch d-flex align-items-center justify-content-between px-0">
                            <label class="form-check-label mb-0 small fw-bold text-dark mx-0 ms-2" for="autoEmail">Auto-send via Email/SMS</label>
                                <div class="form-check form-switch col-md-6 d-flex align-items-center gap-3">
                                    <input class="form-check-input m-0 flex-shrink-0" style="width:40px" type="checkbox" id="autoEmail" checked>
                                    <label class="form-check-label extra-small text-muted mb-0" for="autoEmail">
                                        Auto-email PDF copy to tenant upon finalization
                                    </label>
                                </div></div>
                    </div>
                </div>`;
            showActionModal('Generate Invoices (Batch)', 'Configure the monthly billing automation payload. This will instantly allocate dues to tenant accounts.', 'Generate Batch', 'primary', formFields);
        }
        else if (action === 'link_reports') {
            e.preventDefault();
            showToast('Loading Analytics', 'Redirecting to comprehensive Reports module...', 'info');
            setTimeout(() => {
                window.location.href = 'reports.html';
            }, 500);
        }
        else if (action.includes('export') || action.includes('download') || action.includes('printer')) {
            e.preventDefault();
            showToast('System Export', 'Generating secure PDF report. Please wait...', 'info');
            setTimeout(() => {
                showToast('Export Ready', 'The document has been securely downloaded.', 'success');
            }, 2000);
        }
        else if (action.includes('resolve')) {
            e.preventDefault();
            showToast('Ticket Resolved', 'The maintenance ticket has been officially closed.', 'success');
        }
        else if (action.includes('comment') || action.includes('remark') || title.includes('Comment')) {
            e.preventDefault();
            const formFields = `
                <div class="row g-3">
                    <div class="col-12">
                        <label class="form-label extra-small text-muted fw-bold uppercase">System Remarks / Feedback</label>
                        <textarea class="form-control rounded-3 font-monospace small" rows="4" placeholder="Enter auditing notes or feedback for this record..."></textarea>
                    </div>
                    <div class="col-12">
                        <p class="extra-small text-muted mb-0"><i class="bi bi-info-circle me-1"></i> This remark will be cryptographically hashed into the permanent audit trail.</p>
                    </div>
                </div>`;
            showActionModal('Add Assessment', `Append a formal remark to the audit trail of record [${id}].`, 'Post Remark', 'primary', formFields);
        }
        else if (action.includes('create')) {
            e.preventDefault();
            let formTitle = 'Add New Record';
            let formFields = '';
            
            if (id.includes('OWNER')) {
                formTitle = 'Register New Owner (Strategic Asset Holder)';
                formFields = `
                    <div class="row g-3">
                        <div class="col-12"><h6 class="border-bottom pb-2 mb-0 fw-bold small uppercase text-muted">Identity Details</h6></div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">FULL NAME <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. Michael Ross">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">PRIMARY EMAIL <span class="text-danger">*</span></label>
                            <input type="email" class="form-control rounded-3" placeholder="owner@imperial.com">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">CONTACT NUMBER <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="+880 1XXX-XXXXXX">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">NID / PASSPORT NUMBER <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="ID Card Number">
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold">RESIDENTIAL ADDRESS</label>
                            <textarea class="form-control rounded-3 small" rows="2" placeholder="Permanent address for legal records..."></textarea>
                        </div>

                        <div class="col-12 mt-4"><h6 class="border-bottom pb-2 mb-0 fw-bold small uppercase text-muted">Investment Configuration</h6></div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">TOTAL CAPITAL INVESTMENT (৳)</label>
                            <input type="number" class="form-control rounded-3" placeholder="0.00">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">SHARE PERCENTAGE (%)</label>
                            <input type="number" class="form-control rounded-3" placeholder="10.00">
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold">VERIFICATION DOCUMENTS (PDF/IMG)</label>
                            <input type="file" class="form-control rounded-3" multiple>
                        </div>
                    </div>`;
            } else if (id.includes('NEW_PAYMENT')) {
                formTitle = 'Record Secure Transaction (Payment)';
                formFields = `
                    <div class="row g-3">
                        <div class="col-md-12">
                            <label class="form-label extra-small text-muted fw-bold">TARGET RESIDENT / ENTITY <span class="text-danger">*</span></label>
                            <select class="form-select rounded-3">
                                <option selected disabled>Search Resident...</option>
                                <option>Apt 402 - Sarah Jenkins</option>
                                <option>Shop 04 - Arlene McCoy</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">BILLING CYCLE</label>
                            <input type="month" class="form-control rounded-3" value="2026-04">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">PAYMENT METHOD <span class="text-danger">*</span></label>
                            <select class="form-select rounded-3">
                                <option>Bank Wire (Manual)</option>
                                <option>bKash / Nagad (Auto-Sync)</option>
                                <option>Cash (Counter)</option>
                                <option>Cheque (Pending)</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">AMOUNT PAID (৳) <span class="text-danger">*</span></label>
                            <input type="number" class="form-control rounded-3" placeholder="0.00">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">REFERENCE # / TRX ID</label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. TRX-284920">
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold">PAYMENT NARRATION / REMARKS</label>
                            <textarea class="form-control rounded-3 small" rows="2" placeholder="e.g. Full payment for April rent..."></textarea>
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold">UPLOAD RECEIPT SCAN</label>
                            <input type="file" class="form-control rounded-3">
                        </div>
                    </div>`;
            } else if (id.includes('NEW_JOURNAL_ENTRY')) {
                formTitle = 'Initialize Financial Journal Entry';
                formFields = `
                    <div class="row g-3">
                        <div class="col-md-12">
                            <label class="form-label extra-small text-muted fw-bold">TRANSACTION DATE</label>
                            <input type="date" class="form-control rounded-3" value="2026-04-17">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">DEBIT ACCOUNT <span class="text-danger">*</span></label>
                            <select class="form-select rounded-3">
                                <option>Current Asset (Cash)</option>
                                <option>Bank Clearing</option>
                                <option>Operational Expense</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold">CREDIT ACCOUNT <span class="text-danger">*</span></label>
                            <select class="form-select rounded-3">
                                <option>Service Fee Revenue</option>
                                <option>Security Deposit Liability</option>
                                <option>Rent Income</option>
                            </select>
                        </div>
                        <div class="col-md-12">
                            <label class="form-label extra-small text-muted fw-bold">ENTRY AMOUNT (৳) <span class="text-danger">*</span></label>
                            <input type="number" class="form-control rounded-3" placeholder="0.00">
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold">JOURNAL NARRATION</label>
                            <textarea class="form-control rounded-3 small font-monospace" rows="3" placeholder="Enter auditing details for this ledger hit..."></textarea>
                        </div>
                    </div>`;
            } else if (id.includes('NEW_NOTICE')) {
                formTitle = 'Post Legal/General Notice';
                formFields = `
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Notice Title</label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. Schedule for Monthly Water Tank Cleaning">
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Target Audience</label>
                            <select class="form-select rounded-3">
                                <option selected>Global (All Tenants & Owners)</option>
                                <option>Tenants Only</option>
                                <option>Flat Owners Only</option>
                                <option>Specific Building (Imperial Res.)</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Formal Notice Body</label>
                            <textarea class="form-control rounded-3 font-monospace small" rows="5" placeholder="Enter formal declaration here..."></textarea>
                        </div>
                    </div>`;
            } else if (id.includes('TENANT')) {
                formTitle = 'Register New Tenant (PRD-Certified)';
                formFields = `
                    <div class="row g-3">
                        <div class="col-12"><h6 class="border-bottom pb-2 mb-0 fw-bold">Personal Information</h6></div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Full Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. Sarah Jenkins">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Email Address <span class="text-danger">*</span></label>
                            <input type="email" class="form-control rounded-3" placeholder="sarah@example.com">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Phone Number <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="+880 1XXX-XXXXXX">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">NID / Passport <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="Provide valid ID numb">
                        </div>

                        <div class="col-12 mt-4"><h6 class="border-bottom pb-2 mb-0 fw-bold">Lease & Property Details</h6></div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Select Building <span class="text-danger">*</span></label>
                            <select class="form-select rounded-3">
                                <option selected disabled>Choose Building</option>
                                <option>Imperial Residency</option>
                                <option>Skyline Tower</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Select Unit/Flat <span class="text-danger">*</span></label>
                            <select class="form-select rounded-3">
                                <option selected disabled>Choose Unit</option>
                                <option>Apt 402 (Vacant)</option>
                                <option>Shop 04 (Vacant)</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Lease Start Date <span class="text-danger">*</span></label>
                            <input type="date" class="form-control rounded-3">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Lease End Date</label>
                            <input type="date" class="form-control rounded-3">
                        </div>

                        <div class="col-12 mt-4"><h6 class="border-bottom pb-2 mb-0 fw-bold">Financial Configuration</h6></div>
                        <div class="col-md-4">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Monthly Rent ($) <span class="text-danger">*</span></label>
                            <input type="number" class="form-control rounded-3" placeholder="0.00">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Security Deposit ($)</label>
                            <input type="number" class="form-control rounded-3" placeholder="0.00">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Advance Amount ($)</label>
                            <input type="number" class="form-control rounded-3" placeholder="0.00">
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Emergency Contact (Name & Phone)</label>
                            <input type="text" class="form-control rounded-3" placeholder="John Doe - +880 1XXX-XXXXXX">
                        </div>
                    </div>`;
            } else if (id.includes('NEW_BUILDING')) {
                formTitle = 'Register New Building Asset';
                formFields = `
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Building Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. Imperial Heights">
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Full Address <span class="text-danger">*</span></label>
                            <textarea class="form-control rounded-3 small" rows="2" placeholder="Street, Area, City..."></textarea>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Total Floors</label>
                            <input type="number" class="form-control rounded-3" placeholder="10">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Total Units</label>
                            <input type="number" class="form-control rounded-3" placeholder="40">
                        </div>
                    </div>`;
            } else if (id.includes('NEW_UNIT')) {
                formTitle = 'Initialize New Property Unit';
                formFields = `
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Parent Building <span class="text-danger">*</span></label>
                            <select class="form-select rounded-3">
                                <option>Imperial Residency</option>
                                <option>Skyline Tower</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Unit Number/Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. Apt 402">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Unit Type</label>
                            <select class="form-select rounded-3">
                                <option>Residential Apartment</option>
                                <option>Commercial Shop</option>
                                <option>Office Space</option>
                                <option>Studio</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Square Footage</label>
                            <input type="number" class="form-control rounded-3" placeholder="1250">
                        </div>
                    </div>`;
            } else if (id.includes('NEW_LISTING')) {
                formTitle = 'Post New Marketplace Listing';
                formFields = `
                    <div class="row g-3">
                        <div class="col-md-8">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Property Title <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. Luxury 3BHK with Skyline View">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Listing Type</label>
                            <select class="form-select rounded-3">
                                <option>For Sale</option>
                                <option>For Rent</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Price / Rent ($) <span class="text-danger">*</span></label>
                            <input type="number" class="form-control rounded-3" placeholder="0.00">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Unit Size (Sq Ft)</label>
                            <input type="number" class="form-control rounded-3" placeholder="1200">
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Detailed Description</label>
                            <textarea class="form-control rounded-3 small" rows="3" placeholder="Describe key features, amenities..."></textarea>
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Upload Media (Images/PDF)</label>
                            <input type="file" class="form-control rounded-3" multiple>
                        </div>
                    </div>`;
            } else if (id.includes('INITIATE_TRANSFER')) {
                formTitle = 'Initiate Ownership Transfer';
                formFields = `
                    <div class="row g-3">
                        <div class="col-md-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Target Unit/Flat <span class="text-danger">*</span></label>
                            <select class="form-select rounded-3">
                                <option>Imperial Heights - Apt 104</option>
                                <option>Skyline Plaza - Shop 02</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">New Owner Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="Buyer's Full Name">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">New Owner Email</label>
                            <input type="email" class="form-control rounded-3" placeholder="buyer@example.com">
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Transfer Deeds & NID Copies</label>
                            <input type="file" class="form-control rounded-3" multiple>
                        </div>
                    </div>`;
            } else if (id.includes('UPLOAD_DOCUMENT')) {
                formTitle = 'Upload Secure Document';
                formFields = `
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Document Title <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. Trade License 2026">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Category</label>
                            <select class="form-select rounded-3">
                                <option>Legal / Agreements</option>
                                <option>Financial / Tax</option>
                                <option>Building Blueprints</option>
                                <option>Owner NID / KYC</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Select Asset <span class="text-danger">*</span></label>
                            <input type="file" class="form-control rounded-3">
                        </div>
                    </div>`;
            } else if (id.includes('NEW_MAINTENANCE')) {
                formTitle = 'Issue New Maintenance Ticket';
                formFields = `
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Fault/Issue Subject <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. Elevator B Noise">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Location/Unit</label>
                            <input type="text" class="form-control rounded-3" placeholder="Common Area / Apt 402">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Urgency Level</label>
                            <select class="form-select rounded-3">
                                <option>Low (Routine)</option>
                                <option>Medium (Standard)</option>
                                <option>High (Urgent)</option>
                                <option class="text-danger">Critical (SOS)</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Detailed Description</label>
                            <textarea class="form-control rounded-3 small" rows="3" placeholder="Elaborate on the maintenance requirement..."></textarea>
                        </div>
                    </div>`;
            } else if (id.includes('NEW_VISITOR')) {
                formTitle = 'Register Secure Visitor Entry';
                formFields = `
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Visitor Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="Full Name">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Phone Number</label>
                            <input type="text" class="form-control rounded-3" placeholder="+880...">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Destination (Tower/Apt)</label>
                            <input type="text" class="form-control rounded-3" placeholder="Tower A - Apt 902">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Vehicle Plate (If any)</label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. DHAKA-METRO-...">
                        </div>
                    </div>`;
            } else if (id.includes('NEW_USER')) {
                formTitle = 'Create System Admin/Staff User';
                formFields = `
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Full Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. Annette Murphy">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Professional Email <span class="text-danger">*</span></label>
                            <input type="email" class="form-control rounded-3" placeholder="staff@imperial.os">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Assign Primary Role</label>
                            <select class="form-select rounded-3">
                                <option>Accountant</option>
                                <option>Maintenance Manager</option>
                                <option>Security Supervisor</option>
                                <option>Super Admin</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Default Password</label>
                            <input type="text" class="form-control rounded-3 font-monospace" value="IMPERIAL-TEMP-2026">
                        </div>
                    </div>`;
            } else if (id.includes('NEW_JOURNAL_ENTRY')) {
                formTitle = 'Post Manual Journal Entry';
                formFields = `
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Transaction Particulars <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. Generator Fuel Purchase">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Debit Account</label>
                            <select class="form-select rounded-3">
                                <option>Expense: Utility</option>
                                <option>Asset: Cash at Bank</option>
                                <option>Liability: Accounts Payable</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Credit Account</label>
                            <select class="form-select rounded-3">
                                <option>Asset: Cash at Hand</option>
                                <option>Equity: Owner Capital</option>
                                <option>Revenue: Service Charge</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Amount (Financial Payload)</label>
                            <input type="number" class="form-control rounded-3 fw-bold text-primary" placeholder="0.00">
                        </div>
                    </div>`;
            } else if (id.includes('NEW_BILL') || id.includes('NEW_INVOICE')) {
                formTitle = 'Generate Individual Invoice';
                formFields = `
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Target Tenant <span class="text-danger">*</span></label>
                            <input type="text" class="form-control rounded-3" placeholder="Search Tenant name...">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Due Date</label>
                            <input type="date" class="form-control rounded-3" value="2026-05-01">
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Billing Line items (JSON/Draft)</label>
                            <textarea class="form-control rounded-3 small font-monospace" rows="3">Rent: 1200\nUtility: 150\nMaintenance: 50</textarea>
                        </div>
                    </div>`;
            } else if (id.includes('CUSTOM_INSIGHT')) {
                formTitle = 'Generate Strategic Intelligence Report';
                formFields = `
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Analysis Parameter</label>
                            <select class="form-select rounded-3">
                                <option selected>Occupancy Forecast (Next 6 Months)</option>
                                <option>Revenue Leakage Audit</option>
                                <option>Maintenance Overhead Projection</option>
                                <option>Stakeholder Sentiment Analysis</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Data Granularity</label>
                            <div class="d-flex gap-2">
                                <input type="radio" class="btn-check" name="granularity" id="g-low" autocomplete="off" checked>
                                <label class="btn btn-outline-secondary rounded-pill extra-small px-3" for="g-low">Building Level</label>
                                
                                <input type="radio" class="btn-check" name="granularity" id="g-high" autocomplete="off">
                                <label class="btn btn-outline-primary rounded-pill extra-small px-3" for="g-high">Portfolio Wide</label>
                            </div>
                        </div>
                    </div>`;
            } else {
                formTitle = 'Initialize New Asset Record';
                formFields = `
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">Record Identity</label>
                            <input type="text" class="form-control rounded-3" placeholder="e.g. Asset #0012">
                        </div>
                        <div class="col-12">
                            <label class="form-label extra-small text-muted fw-bold uppercase">System Metadata</label>
                            <textarea class="form-control rounded-3 small" rows="2" placeholder="Describe the purpose of this record..."></textarea>
                        </div>
                    </div>`;
            }

            // Using modal-lg for wider PRD forms
            showActionModal(formTitle, `Please provide the following information to initialize the new record in the Imperial OS database. All actions are cryptographically signed.`, 'Initialize Record', 'primary', formFields);
            
            // Standardize: Make any complex form larger
            setTimeout(() => {
                const modalDialog = document.querySelector('#geistActionModal .modal-dialog');
                if (modalDialog) {
                    modalDialog.classList.add('modal-lg');
                }
            }, 50);
        }

        // Generic Export / Report Handler
        if (action === 'export' || action === 'generate-report') {
            const reportName = $(this).attr('title') || 'Custom Insight';
            showToast(`Generating ${reportName}... System is compiling data patterns.`, 'info');
            setTimeout(() => {
                showToast(`${reportName} has been generated and ready for secure download.`, 'success');
            }, 2000);
        }

        // Secure Wipe Handler
        if (action === 'secure-wipe') {
            showActionModal('CONFIRM SECURE WIPE', 'You are about to permanently purge system audit logs. This action satisfies data residency compliance but is IRREVERSIBLE. Proceed?', 'Perform Wipe', 'danger', `
                <div class="p-3 bg-danger-subtle text-danger rounded-3 extra-small">
                    <i class="bi bi-exclamation-triangle-fill me-2"></i> WARNING: This will erase all localized access logs older than 90 days.
                </div>
            `);
        }

        // Permission Management Handler
        if (id.includes('PERMISSIONS')) {
            showActionModal('Role Permission Manager', 'Configure granular access overrides for this user account. Compliance flags will be updated automatically.', 'Apply Permissions', 'primary', `
                <div class="list-group list-group-flush border rounded-3 overflow-hidden">
                    <div class="list-group-item d-flex justify-content-between extra-small">
                        <span>Financial Audit Access</span>
                        <div class="form-check form-switch"><input class="form-check-input" type="checkbox" checked></div>
                    </div>
                    <div class="list-group-item d-flex justify-content-between extra-small">
                        <span>Legal Document Override</span>
                        <div class="form-check form-switch"><input class="form-check-input" type="checkbox"></div>
                    </div>
                </div>
            `);
        }
    });
    };

    // 3. Helper: Show Premium Toast
    window.showToast = (title, msg, type = 'info') => {
        const container = document.querySelector('.geist-toast-container');
        const toast = document.createElement('div');
        toast.className = `geist-toast geist-toast-${type}`;
        
        const iconClasses = {
            success: 'bi-check-circle-fill',
            error: 'bi-exclamation-triangle-fill',
            info: 'bi-info-circle-fill'
        };

        toast.innerHTML = `
            <div class="geist-toast-icon"><i class="bi ${iconClasses[type]}"></i></div>
            <div class="geist-toast-content">
                <div class="geist-toast-title">${title}</div>
                <div class="geist-toast-msg">${msg}</div>
            </div>
        `;

        container.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    };

    // 4. Helper: Show Premium Action Modal
    window.showActionModal = (title, body, confirmBtnText, type = 'primary', customHtml = '') => {
        // Remove existing modal if any
        const oldModal = document.getElementById('geistActionModal');
        if (oldModal) oldModal.remove();

        const btnClass = type === 'danger' ? 'btn-danger' : 'btn-geist';
        
        const modalHtml = `
            <div class="modal fade" id="geistActionModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content geist-modal">
                        <div class="modal-header">
                            <h5 class="modal-title">${title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p class="text-muted small">${body}</p>
                            ${customHtml ? `<div class="mt-4 pt-3 border-top">${customHtml}</div>` : ''}
                            ${type !== 'danger' && !customHtml ? `
                            <div class="mt-3">
                                <label class="extra-small uppercase fw-bold text-muted mb-2">Internal Note</label>
                                <textarea class="form-control border-accents-2 rounded-3 small" rows="3" placeholder="Add a reason for this change..."></textarea>
                            </div>` : ''}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light rounded-pill px-4 extra-small" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn ${btnClass} rounded-pill px-4 extra-small" id="confirmActionBtn">${confirmBtnText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const modalEl = document.getElementById('geistActionModal');
        const bsModal = new bootstrap.Modal(modalEl);
        bsModal.show();

        document.getElementById('confirmActionBtn').addEventListener('click', () => {
            bsModal.hide();
            showToast('Action Successful', 'The operation was processed by the Imperial OS Engine.', 'success');
        });
    };

    // Logout Handler
    const initLogout = () => {
        const logoutBtn = document.getElementById('logoutBtn');
        if (!logoutBtn) return;

        logoutBtn.addEventListener('click', () => {
            // Remove stale modal if exists
            const old = document.getElementById('logoutConfirmModal');
            if (old) old.remove();

            const modalHtml = `
                <div class="modal fade" id="logoutConfirmModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-sm">
                        <div class="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
                            <div class="modal-body p-4 text-center">
                                <div class="rounded-circle bg-danger-subtle d-flex align-items-center justify-content-center mx-auto mb-3" style="width:56px;height:56px;">
                                    <i class="bi bi-box-arrow-right text-danger fs-4"></i>
                                </div>
                                <h6 class="fw-bold mb-1">Sign Out?</h6>
                                <p class="extra-small text-muted mb-4">You will be redirected to the login page.</p>
                                <div class="d-flex gap-2">
                                    <button class="btn btn-light border rounded-pill px-4 flex-fill extra-small" data-bs-dismiss="modal">Cancel</button>
                                    <button class="btn btn-danger rounded-pill px-4 flex-fill extra-small" id="confirmLogoutBtn">Sign Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

            document.body.insertAdjacentHTML('beforeend', modalHtml);
            const modalEl = document.getElementById('logoutConfirmModal');
            const bsModal = new bootstrap.Modal(modalEl);
            bsModal.show();

            document.getElementById('confirmLogoutBtn').addEventListener('click', () => {
                bsModal.hide();
                // Clear any session data
                sessionStorage.clear();
                localStorage.removeItem('imperialUser');
                // Redirect to login
                window.location.href = 'login.html';
            });

            // Cleanup modal from DOM after hiding
            modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
        });
    };

    initLogout();

/**
 * UNIT MANAGEMENT VIEW TOGGLE
 * Switches between Asset Grid and Audit Table modes.
 */
window.switchUnitView = (view) => {
    const gridContainer = document.getElementById('unit-grid-container');
    const tableContainer = document.getElementById('unit-list-container');
    const btnGrid = document.getElementById('btn-view-grid');
    const btnList = document.getElementById('btn-view-list');

    if (!gridContainer || !tableContainer || !btnGrid || !btnList) return;

    if (view === 'grid') {
        gridContainer.classList.remove('d-none');
        tableContainer.classList.add('d-none');
        
        btnGrid.classList.add('active', 'shadow-sm');
        btnList.classList.remove('active', 'shadow-sm');
    } else {
        gridContainer.classList.add('d-none');
        tableContainer.classList.remove('d-none');
        
        btnGrid.classList.remove('active', 'shadow-sm');
        btnList.classList.add('active', 'shadow-sm');
    }

    // Refresh AOS animations for the newly visible view
    if (typeof AOS !== 'undefined') {
        setTimeout(() => {
            AOS.refresh();
        }, 1000);
    }
};

/**
 * ══════════════════════════════════════════════════════════════
 * APP-MODE: MOBILE NAVIGATION LOGIC
 * Handles sidebars, bottom nav, and mobile menu overlays.
 * ══════════════════════════════════════════════════════════════
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dashboard Sidebar Toggle
    const sidebar = document.querySelector('.sidebar-geist');
    const overlay = document.querySelector('.sidebar-overlay') || (() => {
        const div = document.createElement('div');
        div.className = 'sidebar-overlay';
        document.body.appendChild(div);
        return div;
    })();

    const toggleSidebar = () => {
        if (!sidebar) return;
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    };

    // Listen for toggle buttons (to be added in HTML)
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-toggle-sidebar') || e.target.closest('.sidebar-overlay')) {
            toggleSidebar();
        }
    });

    // 2. Public Site Mobile Menu Overlay
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const toggleMenu = () => {
        if (!menuOverlay) return;
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.navbar-mobile-toggle')) {
            toggleMenu();
        }
    });

    // 3. Bottom Navigation Active State
    const updateBottomNav = () => {
        const bottomLinks = document.querySelectorAll('.bottom-nav-item');
        const currentPath = window.location.pathname;
        
        bottomLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && currentPath.includes(href)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    updateBottomNav();

    // 4. Subtle Page Transition
    document.body.classList.add('app-loaded');
});
