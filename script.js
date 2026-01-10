// ===== MOBILE MENU =====
      const btn = document.getElementById("mobile-menu-btn");
      const menu = document.getElementById("mobile-menu");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });

      menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          menu.classList.add("hidden");
        });
      });

      // ===== TYPING EFFECT =====
      const textElement = document.getElementById("typing-text");
      const phrases = [
        "Saigon University Student",
        "Machine Learning Enthusiast",
        "Computer Vision Lover",
      ];
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
          textElement.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
        } else {
          textElement.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, isDeleting ? 50 : 100);
        }
      }

      document.addEventListener("DOMContentLoaded", type);

      // ===== NAVBAR SCROLL EFFECT =====
      window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 20) {
          navbar.classList.add("shadow-md");
          navbar.classList.add("bg-white/95");
        } else {
          navbar.classList.remove("shadow-md");
          navbar.classList.remove("bg-white/95");
        }
      });

      // ===== SCROLL PROGRESS BAR =====
      window.addEventListener("scroll", () => {
        const scrollProgress = document.getElementById("scroll-progress");
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + "%";
      });

      // ===== BACK TO TOP BUTTON =====
      const backToTopButton = document.getElementById("back-to-top");
      
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTopButton.classList.add("show");
        } else {
          backToTopButton.classList.remove("show");
        }
      });

      backToTopButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });

      // ===== SCROLL ANIMATIONS =====
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, observerOptions);

      // Observe all animated elements
      document.addEventListener("DOMContentLoaded", () => {
        const animatedElements = document.querySelectorAll(
          ".fade-in, .slide-left, .slide-right, .scale-in"
        );
        animatedElements.forEach(el => observer.observe(el));
      });

      // ===== PARALLAX EFFECT =====
      document.addEventListener("mousemove", (e) => {
        const parallaxElements = document.querySelectorAll(".parallax");
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        parallaxElements.forEach((el, index) => {
          const speed = (index + 1) * 20;
          const x = (mouseX - 0.5) * speed;
          const y = (mouseY - 0.5) * speed;
          el.style.transform = `translate(${x}px, ${y}px)`;
        });
      });

      // ===== SMOOTH SCROLL FOR LINKS =====
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          if (targetId === "#") return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth"
            });
          }
        });
      });

      // ===== CARD HOVER 3D EFFECT =====
      document.querySelectorAll(".card-hover").forEach(card => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener("mouseleave", () => {
          card.style.transform = "";
        });
      });

      // ===== LAZY LOAD IMAGES WITH FADE-IN =====
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = "0";
            img.style.transition = "opacity 0.5s ease-in";
            
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            
            img.onload = () => {
              img.style.opacity = "1";
            };
            
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll("img[loading='lazy']").forEach(img => {
        imageObserver.observe(img);
      });

      // ===== STAGGER ANIMATION FOR LISTS =====
      document.addEventListener("DOMContentLoaded", () => {
        const lists = document.querySelectorAll(".grid, .flex");
        lists.forEach(list => {
          const children = Array.from(list.children);
          children.forEach((child, index) => {
            if (child.classList.contains("fade-in") || 
                child.classList.contains("slide-left") || 
                child.classList.contains("slide-right")) {
              child.style.transitionDelay = `${index * 0.1}s`;
            }
          });
        });
      });

      // ===== CURSOR TRAIL EFFECT (OPTIONAL - SUBTLE) =====
      let cursorTrail = [];
      const trailLength = 5;

      document.addEventListener("mousemove", (e) => {
        cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        if (cursorTrail.length > trailLength) {
          cursorTrail.shift();
        }
      });

      // ===== PERFORMANCE OPTIMIZATION =====
      let ticking = false;
      
      function updateAnimations() {
        // Batch DOM updates here if needed
        ticking = false;
      }

      window.addEventListener("scroll", () => {
        if (!ticking) {
          window.requestAnimationFrame(updateAnimations);
          ticking = true;
        }
      });

      // ===== PRELOAD CRITICAL ASSETS =====
      window.addEventListener("load", () => {
        // Add fade-in effect to body after load
        document.body.style.opacity = "0";
        document.body.style.transition = "opacity 0.3s ease-in";
        setTimeout(() => {
          document.body.style.opacity = "1";
        }, 100);
      });

      // ===== EASTER EGG: KONAMI CODE =====
      let konamiCode = [];
      const konamiSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
      
      document.addEventListener("keydown", (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-konamiSequence.length);
        
        if (konamiCode.join("") === konamiSequence.join("")) {
          // Trigger special effect
          document.body.style.animation = "rainbow 2s linear infinite";
          setTimeout(() => {
            document.body.style.animation = "";
          }, 5000);
        }
      });

      // ===== CONSOLE MESSAGE =====
      console.log(
        "%c👋 Hello Developer!",
        "font-size: 20px; font-weight: bold; color: #6366f1;"
      );
      console.log(
        "%cWelcome to my portfolio. Feel free to explore the code!",
        "font-size: 14px; color: #64748b;"
      );
      console.log(
        "%c💼 GitHub: https://github.com/Kietnehi",
        "font-size: 12px; color: #ec4899;"
      );

      // ===== DARK MODE TOGGLE =====
      const themeToggle = document.getElementById("theme-toggle");
      const themeToggleMobile = document.getElementById("theme-toggle-mobile");
      const html = document.documentElement;

      // Check for saved theme preference or default to 'light' mode
      const currentTheme = localStorage.getItem("theme") || "light";
      if (currentTheme === "dark") {
        html.classList.add("dark");
      }

      function toggleTheme() {
        html.classList.toggle("dark");
        const theme = html.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", theme);
      }

      themeToggle.addEventListener("click", toggleTheme);
      themeToggleMobile.addEventListener("click", toggleTheme);

      // ===== LANGUAGE TOGGLE =====
      const langToggle = document.getElementById("lang-toggle");
      const langToggleMobile = document.getElementById("lang-toggle-mobile");
      const langText = document.getElementById("lang-text");
      const langTextMobile = document.getElementById("lang-text-mobile");

      // Check for saved language preference or default to 'en'
      let currentLang = localStorage.getItem("language") || "en";

      // Language content
      const translations = {
        en: {
          welcome: "👋 Welcome to my portfolio",
          hiIm: "Hi, I'm",
          description: "I am an IT student at <b>Saigon University (SGU)</b>. I have a deep passion for <b>Machine Learning</b>, specifically <b>Deep Learning for Computer Vision</b>. I enjoy exploring how machines understand and process visual data just like humans do.",
          downloadCV: "Download CV",
          followMe: "Follow me:",
          githubStatsTitle: "GitHub Statistics",
          githubStatsDesc: "Overview of GitHub activity, contribution streaks, and most used languages.",
          generalStats: "General Stats",
          generalStatsDesc: "Stars, commits, PRs, issues, and more",
          streak: "Streak",
          streakDesc: "Recent contribution streak",
          mostUsedLangs: "Most Used Languages",
          mostUsedLangsDesc: "Top languages based on repository statistics",
          skillsTitle: "Skills & Technologies",
          projectsTitle: "All Projects",
          projectsDesc: "A collection of my work in AI/ML, Web Development, and University Projects.",
          viewGithub: "View GitHub Profile",
          viewSource: "View Source",
          contactTitle: "Let's Connect!",
          contactDesc: "Do you share the same passion for AI/ML or want to discuss technology? Don't hesitate to reach out to me.",
          sendEmail: "Send Email",
          linkedinProfile: "LinkedIn Profile"
        },
        vi: {
          welcome: "👋 Chào mừng đến portfolio của tôi",
          hiIm: "Xin chào, tôi là",
          description: "Tôi là sinh viên IT tại <b>Đại học Sài Gòn (SGU)</b>. Tôi có niềm đam mê sâu sắc với <b>Machine Learning</b>, đặc biệt là <b>Deep Learning cho Computer Vision</b>. Tôi thích khám phá cách máy móc hiểu và xử lý dữ liệu hình ảnh giống như con người.",
          downloadCV: "Tải CV",
          followMe: "Theo dõi tôi:",
          githubStatsTitle: "Thống kê GitHub",
          githubStatsDesc: "Tổng quan về hoạt động GitHub, chuỗi đóng góp và ngôn ngữ được sử dụng nhiều nhất.",
          generalStats: "Thống kê chung",
          generalStatsDesc: "Stars, commits, PRs, issues và nhiều hơn",
          streak: "Chuỗi đóng góp",
          streakDesc: "Chuỗi đóng góp gần đây",
          mostUsedLangs: "Ngôn ngữ sử dụng nhiều",
          mostUsedLangsDesc: "Ngôn ngữ hàng đầu dựa trên thống kê repository",
          skillsTitle: "Kỹ năng & Công nghệ",
          projectsTitle: "Tất cả Dự án",
          projectsDesc: "Tổng hợp các dự án của tôi về AI/ML, Phát triển Web và Dự án Đại học.",
          viewGithub: "Xem GitHub",
          viewSource: "Xem mã nguồn",
          contactTitle: "Hãy kết nối!",
          contactDesc: "Bạn có cùng đam mê về AI/ML hoặc muốn thảo luận về công nghệ? Đừng ngại liên hệ với tôi.",
          sendEmail: "Gửi Email",
          linkedinProfile: "Hồ sơ LinkedIn"
        }
      };

      function switchLanguage() {
        currentLang = currentLang === "en" ? "vi" : "en";
        localStorage.setItem("language", currentLang);
        
        langText.textContent = currentLang === "en" ? "VI" : "EN";
        langTextMobile.textContent = currentLang === "en" ? "VI" : "EN";

        // Update all elements with data-en and data-vi attributes
        document.querySelectorAll("[data-en]").forEach(el => {
          const text = currentLang === "en" ? el.dataset.en : el.dataset.vi;
          if (text) {
            el.textContent = text;
          }
        });

        // Update specific content elements
        updateContent();
      }

      function updateContent() {
        const t = translations[currentLang];
        
        // Update welcome badge
        const welcomeBadge = document.querySelector(".inline-block.px-3.py-1.bg-indigo-50");
        if (welcomeBadge) welcomeBadge.textContent = t.welcome;

        // Update description
        const description = document.querySelector("section#about p.text-base");
        if (description) description.innerHTML = t.description;

        // Update buttons
        const downloadBtn = document.querySelector("a[href*='drive.google.com']");
        if (downloadBtn) {
          downloadBtn.innerHTML = `<i class="fas fa-file-download"></i> ${t.downloadCV}`;
        }

        // Update Follow me text
        const followText = document.querySelector("span.tracking-wider");
        if (followText && followText.textContent.includes("Follow")) {
          followText.textContent = t.followMe;
        }

        // Update GitHub Stats section
        const githubTitle = document.querySelector("#github-stats h2");
        if (githubTitle) githubTitle.textContent = t.githubStatsTitle;
        
        const githubDesc = document.querySelector("#github-stats p.mt-2");
        if (githubDesc) githubDesc.textContent = t.githubStatsDesc;

        // Update Skills section
        const skillsTitle = document.querySelector("#skills h2");
        if (skillsTitle) skillsTitle.textContent = t.skillsTitle;

        // Update Projects section
        const projectsTitle = document.querySelector("#projects h2");
        if (projectsTitle) projectsTitle.textContent = t.projectsTitle;

        const projectsDesc = document.querySelector("#projects p.text-gray-400");
        if (projectsDesc) projectsDesc.textContent = t.projectsDesc;

        // Update Contact section
        const contactTitle = document.querySelector("#contact h2");
        if (contactTitle) contactTitle.textContent = t.contactTitle;

        const contactDesc = document.querySelector("#contact p.text-sm");
        if (contactDesc) contactDesc.textContent = t.contactDesc;
      }

      // Initialize language
      if (currentLang === "vi") {
        langText.textContent = "EN";
        langTextMobile.textContent = "EN";
        switchLanguage();
      } else {
        langText.textContent = "VI";
        langTextMobile.textContent = "VI";
      }

      langToggle.addEventListener("click", switchLanguage);
      langToggleMobile.addEventListener("click", switchLanguage);

        // Scroll reveal
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // Back to top button
  const toTop = document.getElementById("toTop");
  const toggleToTop = () => {
    if (window.scrollY > 500) toTop.classList.add("show");
    else toTop.classList.remove("show");
  };
  window.addEventListener("scroll", toggleToTop);
  toggleToTop();

  toTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  if (!loader) return;

  // giữ loader tối thiểu 800ms cho mượt (tránh nháy)
  setTimeout(() => {
    loader.classList.add("hide");
    document.body.classList.remove("loading");
    setTimeout(() => loader.remove(), 1500);
  }, 800);
});

// ===== PROJECT PAGINATION =====
const projectCards = document.querySelectorAll('.project-card');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageNumbersContainer = document.getElementById('pageNumbers');

let currentPage = 1;
const projectsPerPage = 6;
const totalPages = Math.ceil(projectCards.length / projectsPerPage);

function showPage(page) {
  currentPage = page;
  
  // Hide all project cards
  projectCards.forEach(card => {
    card.style.display = 'none';
  });
  
  // Show only cards for current page
  projectCards.forEach(card => {
    const cardPage = parseInt(card.getAttribute('data-page'));
    if (cardPage === currentPage) {
      card.style.display = 'flex';
    }
  });
  
  // Update button states
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;
  
  // Update page numbers
  updatePageNumbers();
  
  // Scroll to projects section smoothly
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updatePageNumbers() {
  pageNumbersContainer.innerHTML = '';
  
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = i;
    pageBtn.className = `w-10 h-10 rounded-lg transition-all ${
      i === currentPage 
        ? 'bg-indigo-600 text-white font-bold shadow-lg' 
        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
    }`;
    
    pageBtn.addEventListener('click', () => showPage(i));
    pageNumbersContainer.appendChild(pageBtn);
  }
}

prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
});

nextPageBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
});

// Initialize pagination on page load
showPage(1);