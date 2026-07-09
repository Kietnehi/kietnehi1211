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

      function applyLanguage(language) {
        currentLang = language;
        localStorage.setItem("language", currentLang);

        const nextLabel = currentLang === "en" ? "VI" : "EN";
        langText.textContent = nextLabel;
        langTextMobile.textContent = nextLabel;

        document.querySelectorAll("[data-en]").forEach(el => {
          const text = currentLang === "en" ? el.dataset.en : el.dataset.vi;
          if (text) {
            el.textContent = text;
          }
        });

        updateContent();
      }

      function switchLanguage() {
        applyLanguage(currentLang === "en" ? "vi" : "en");
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
      applyLanguage(currentLang === "vi" ? "vi" : "en");

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
// ===== PREMIUM PRELOADER =====
(function () {
  const loader = document.getElementById("preloader");
  if (!loader) return;

  const canvas = document.getElementById("loader-particles");
  const progressBar = document.getElementById("loader-progress-bar");
  const percentEl = document.getElementById("loader-percent");

  // --- Particle & Neural Network system ---
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let W, H;
    let particles = [];
    let pulses = [];
    const MAX_PULSES = 7;
    const CONNECTION_DIST = 130;
    let PARTICLE_COUNT = window.innerWidth < 768 ? 25 : 50;

    let mouse = { x: 0, y: 0, active: false };

    // Capture mouse moves inside the preloader container
    loader.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });

    loader.addEventListener("mouseleave", () => {
      mouse.active = false;
    });

    // Custom colors matching the design system
    const COLORS = [
      { r: 0, g: 242, b: 254 },   // Cyan
      { r: 124, g: 58, b: 237 },  // Violet
      { r: 59, g: 130, b: 246 },  // Blue
      { r: 255, g: 255, b: 255 }  // White/Highlight
    ];

    function resizeCanvas() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      PARTICLE_COUNT = window.innerWidth < 768 ? 25 : 50;
    }

    function getRandomColor() {
      return COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    function createParticle() {
      const color = getRandomColor();
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.8 + 1, // 1 to 2.8
        color: color,
        alpha: Math.random() * 0.4 + 0.35, // 0.35 to 0.75
        isGlowNode: Math.random() > 0.88 // ~12% chance to be a glowing neural hub node
      };
    }

    function initParticles() {
      resizeCanvas();
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
      pulses = [];
    }

    function drawParticles() {
      ctx.clearRect(0, 0, W, H);

      const activeConnections = [];
      const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST;

      // OPTIMIZATION: Batch connection line drawing into a single path
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 242, 254, 0.08)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          
          if (distSq < CONNECTION_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            activeConnections.push({ p1: particles[i], p2: particles[j], dist: dist });
            
            // Add connection line segment to batch path
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.stroke(); // Draw all connection lines in one single call!

      // OPTIMIZATION: Batch mouse connections
      if (mouse.active) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(0, 242, 254, 0.07)";
        ctx.lineWidth = 0.5;
        const MOUSE_DIST_SQ = 150 * 150;
        const MOUSE_PULL_SQ = 180 * 180;

        particles.forEach((p) => {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mdistSq = mdx * mdx + mdy * mdy;
          
          if (mdistSq < MOUSE_PULL_SQ) {
            const mdist = Math.sqrt(mdistSq);
            // Apply gentle gravity pull
            const force = (180 - mdist) / 180;
            p.vx += (mdx / mdist) * force * 0.02;
            p.vy += (mdy / mdist) * force * 0.02;
            
            if (mdistSq < MOUSE_DIST_SQ) {
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
            }
          }
        });
        ctx.stroke(); // Draw all mouse connection lines in one call!
      }

      // Draw & move particles
      particles.forEach((p) => {
        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;
        
        // Damp velocity to keep movement smooth and prevent acceleration explosion
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Caps max speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 0.5;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        // Bounce on boundaries
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        else if (p.x > W) { p.x = W; p.vx *= -1; }
        
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        else if (p.y > H) { p.y = H; p.vy *= -1; }

        // Draw node glow (double circle)
        if (p.isGlowNode) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${(p.alpha * 0.12).toFixed(3)})`;
          ctx.fill();
        }

        // Draw node core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha.toFixed(3)})`;
        ctx.fill();
      });

      // Spawn pulses randomly on active connections
      if (activeConnections.length > 0 && pulses.length < MAX_PULSES && Math.random() < 0.04) {
        const conn = activeConnections[Math.floor(Math.random() * activeConnections.length)];
        const startNode = Math.random() > 0.5 ? conn.p1 : conn.p2;
        const endNode = startNode === conn.p1 ? conn.p2 : conn.p1;
        
        pulses.push({
          from: startNode,
          to: endNode,
          progress: 0,
          speed: 0.007 + Math.random() * 0.008,
          color: startNode.color,
          r: Math.random() * 1.0 + 1.0,
          history: [] // positions trail
        });
      }

      // Update and draw active pulses with fading trails (shorter trails for performance)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        
        // Calculate current position
        const px = pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.progress;
        const py = pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.progress;

        // Update trail history (max 4 points for performance)
        pulse.history.push({ x: px, y: py });
        if (pulse.history.length > 4) {
          pulse.history.shift();
        }

        // Draw trail dots
        pulse.history.forEach((pt, idx) => {
          const ratio = idx / pulse.history.length;
          const trailAlpha = 0.4 * ratio;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pulse.r * (0.5 + 0.5 * ratio), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${pulse.color.r}, ${pulse.color.g}, ${pulse.color.b}, ${trailAlpha.toFixed(3)})`;
          ctx.fill();
        });

        // Draw primary pulse core
        ctx.beginPath();
        ctx.arc(px, py, pulse.r * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pulse.color.r}, ${pulse.color.g}, ${pulse.color.b}, 0.9)`;
        ctx.fill();

        // Increment progress
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulses.splice(i, 1);
        }
      }

      // Loop if not hidden
      if (!loader.classList.contains("hide")) {
        requestAnimationFrame(drawParticles);
      }
    }

    initParticles();
    drawParticles();
    window.addEventListener("resize", resizeCanvas);
  }

  // --- Progress animation ---
  const DURATION = 2200; // ms
  let startTime = null;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateProgress(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const rawProgress = Math.min(elapsed / DURATION, 1);
    const progress = easeOutCubic(rawProgress);
    const percent = Math.round(progress * 100);

    if (progressBar) progressBar.style.width = percent + "%";
    if (percentEl) percentEl.textContent = percent + "%";

    if (rawProgress < 1) {
      requestAnimationFrame(animateProgress);
    } else {
      // Done — fade out
      setTimeout(() => {
        loader.classList.add("hide");
        document.body.classList.remove("loading");
        setTimeout(() => loader.remove(), 900);
      }, 400);
    }
  }

  // Start progress bar animation after a short entrance delay
  setTimeout(() => {
    requestAnimationFrame(animateProgress);
  }, 600);
})();

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

// ===== AI CHATBOT WIDGET =====
(function () {
  const elToggle   = document.getElementById('chat-toggle');
  const elWindow   = document.getElementById('chat-window');
  const elMessages = document.getElementById('chat-messages');
  const elInput    = document.getElementById('chat-input');
  const elSend     = document.getElementById('chat-send');
  const elBadge    = document.getElementById('chat-badge');
  const elClear    = document.getElementById('chat-clear');
  const elClose    = document.getElementById('chat-close');
  const elIconOpen = document.getElementById('chat-icon-open');
  const elIconClose= document.getElementById('chat-icon-close');

  if (!elToggle || !elWindow || !elMessages || !elInput) return;

  let isOpen = false;
  let lastTopic = null;

  // ── Knowledge base (dùng phrases dài, tránh match sai) ──────
  const normalizeText = (text = "") =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^\w\s@./+-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const escapeRegex = (value = "") => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const matchesTerm = (text, term) => {
    const t = (term || "").trim();
    if (!t) return false;
    if (!t.includes(" ")) {
      const pattern = new RegExp(`(?:^|\\s)${escapeRegex(t)}(?:$|\\s)`);
      return pattern.test(text);
    }
    return text.includes(t);
  };

  const includesAny = (text, terms) => terms.some(term => matchesTerm(text, term));

  const KB = [
    {
      topic: "greeting",
      test: ({ norm }) => includesAny(norm, ["hello", "hey", "xin chao", "chao", "hi", "howdy", "sup"]),
      reply: `👋 Xin chào! Mình là **KietAI** — trợ lý AI của Phu Kiet.\n\nMình có thể giúp bạn khám phá **giới thiệu**, **skills**, **projects**, **competitions**, **SmartGov**, **GitHub**, **CV**, **học vấn** hoặc **liên hệ**.\n\nNếu bạn muốn, cứ hỏi tự nhiên như “nói rõ hơn về SmartGov” hoặc “project nào nổi bật nhất?”.`
    },
    {
      topic: "about",
      test: ({ norm }) => includesAny(norm, [
        "gioi thieu",
        "ban la ai",
        "kiet la ai",
        "who is phu kiet",
        "who is kiet",
        "tell me about yourself",
        "about yourself",
        "introduce yourself",
        "about phu kiet",
        "about kiet"
      ]),
      reply: `🧑‍💻 **Phu Kiet (Kietnehi)** là sinh viên IT tại **Đại học Sài Gòn (SGU)**.\n\nMình tập trung vào **Machine Learning**, **Computer Vision**, **Deep Learning** và các ứng dụng AI thực tế. Điểm mình thích nhất là biến ý tưởng thành sản phẩm có thể demo, có thể dùng được và giải quyết được vấn đề thật.\n\nNếu bạn muốn, mình có thể kể tiếp theo kiểu “hành trình học tập”, “định hướng nghề nghiệp”, hoặc “điểm mạnh nổi bật”.`
    },
    {
      topic: "skills",
      test: ({ norm }) => includesAny(norm, ["skill", "ky nang", "tech stack", "cong nghe", "tools", "technology", "stack", "what do you know"]),
      reply: `🛠️ **Tech Stack của Kiet:**\n\n🤖 **AI/ML:** Python, PyTorch, TensorFlow, NumPy, Scikit-learn, CUDA\n🌐 **Web:** React, Next.js, Node.js, FastAPI, Flask, JavaScript\n🗄️ **Database:** MongoDB, MySQL, PostgreSQL, SQL Server\n☁️ **DevOps:** Docker, Kubernetes, AWS, Git, Grafana\n📊 **Data:** Apache Spark, Hadoop\n\nNếu bạn muốn, mình có thể tách riêng theo từng mảng như **AI/ML**, **Web**, **DevOps**, hoặc **Database**.`
    },
    {
      topic: "focus",
      test: ({ norm }) => includesAny(norm, ["current focus", "dang lam gi", "dang nghien cuu", "focus", "research", "working on", "now working", "what are you building"]),
      reply: `🧠 **Hiện tại Kiet đang tập trung vào:**\n\n• **Computer Vision** và các bài toán nhận dạng / phát hiện / OCR\n• **AI assistants** phục vụ tác vụ thực tế\n• **Public-service AI** như SmartGov Copilot\n• **Web app tích hợp AI** để demo nhanh và triển khai dễ\n\nNói ngắn gọn: Kiet thích làm những thứ AI có thể **chạm vào đời thật**, không chỉ là mô hình trên giấy.\n\nBạn có thể hỏi tiếp “project nào thể hiện rõ nhất hướng này?”`
    },
    {
      topic: "projects",
      test: ({ norm }) => includesAny(norm, ["project", "du an", "portfolio", "work", "built", "build", "san pham", "what projects", "featured projects"]),
      reply: `💼 **Một số dự án nổi bật:**\n\n🎓 **AI FOR EDUCATION** — Nền tảng học cá nhân hóa dùng Gemini AI\n🤖 **RAG & Multimodal LLM** — Hệ thống RAG với Ollama, BLIP, Docker\n🏆 **SmartGov Copilot / GovVoice AI** — Trợ lý AI dịch vụ công đa phương thức\n🚁 **UAV Flood Detection** — Phát hiện người trong lũ lụt bằng Computer Vision\n🔊 **Audio To YouTube AI** — Nhận dạng âm thanh & tìm nhạc trên YouTube\n🕸️ **Crawl4AI Website Scraper** — Công cụ crawl web có tôn trọng robots.txt\n\n👉 Nếu bạn muốn, mình có thể đi sâu vào **mục tiêu**, **công nghệ**, hoặc **kết quả** của từng project.`
    },
    {
      topic: "smartgov",
      test: ({ norm }) => includesAny(norm, ["smartgov", "govvoice", "public service ai", "dich vu cong", "hack aithon", "hackaithon", "vietnamese student"]),
      reply: `🏆 **Vietnamese Student HackAIThon 2026 — SmartGov Copilot / GovVoice AI**\n\nĐây là dự án trợ lý AI dịch vụ công đa phương thức, không chỉ trả lời câu hỏi mà còn hỗ trợ toàn bộ quy trình nộp hồ sơ:\n\n• **Citizen Assistant**: tư vấn thủ tục, checklist giấy tờ, hỗ trợ bằng giọng nói\n• **AI Pre-check**: OCR, Computer Vision, eKYC để bóc tách và kiểm tra hồ sơ trước khi nộp\n• **Officer Copilot**: tóm tắt hồ sơ, đánh dấu điểm bất thường, gợi ý phản hồi cho cán bộ\n• **SmartGov Dashboard**: theo dõi throughput, thời gian xử lý và chất lượng dịch vụ\n\n📌 Kết quả: **Top 32/220 đội thi ở bảng B**, đạt **70/100 điểm**.\n\nNếu bạn muốn, mình có thể tách riêng phần **workflow**, **tech stack**, hoặc **vai trò của Kiet trong project**.`
    },
    {
      topic: "vnpt",
      test: ({ norm }) => includesAny(norm, ["vnpt", "meeting assistant", "age of unicorn"]),
      reply: `🔵 **VNPT Hackathon — AI-Powered Meeting Assistant**\n\nDự án này tập trung vào việc hỗ trợ họp và xử lý tài liệu bằng AI:\n\n• Computer Vision để nhận diện người tham gia\n• OCR để đọc và xử lý tài liệu\n• LLM để phân tích nội dung họp\n• AI Agent để hỗ trợ tự động hóa tác vụ\n• Audio recording để ghi và trích xuất nội dung cuộc họp\n\n📌 Trạng thái: đã nộp proposal, chưa vào vòng chung kết.\n\nNếu bạn cần, mình có thể mô tả theo kiểu **bài toán - giải pháp - impact** để dễ đưa vào CV hoặc phỏng vấn.`
    },
    {
      topic: "cursor",
      test: ({ norm }) => includesAny(norm, ["cursor", "uav", "flood rescue", "flood detection", "drone"]),
      reply: `🟠 **Cursor Hackathon — UAV-Based Flood Rescue Detection**\n\nĐây là hệ thống UAV tự động dùng Computer Vision + Object Detection để phát hiện người gặp nguy hiểm trong vùng lũ từ ảnh trên không.\n\nMục tiêu của project là hỗ trợ phản ứng nhanh hơn trong các tình huống cứu hộ khẩn cấp, khi từng phút đều rất quan trọng.\n\nNếu muốn, mình có thể giải thích thêm về **pipeline xử lý ảnh** hoặc **cách project hỗ trợ cứu hộ**.`
    },
    {
      topic: "competition",
      test: ({ norm }) => includesAny(norm, ["competition", "hackathon", "cuoc thi", "contest", "award", "giai thuong", "challenge", "timeline", "alternating"]),
      reply: `🏆 **Competitions & Hackathons:**\n\n🟢 **Vietnamese Student HackAIThon 2026** — SmartGov Copilot / GovVoice AI\n🔵 **VNPT Hackathon** — AI-Powered Meeting Assistant\n🟠 **Cursor Hackathon** — UAV-Based Flood Rescue Detection\n\n💡 *Bật mí:* Mình vừa được anh Kiet nâng cấp phần hiển thị **timeline xen kẽ trái/phải** cực kỳ đẹp mắt trên bản PC đó! Bạn hãy cuộn lên để xem nhé!`
    },
    {
      topic: "education",
      test: ({ norm }) => includesAny(norm, ["education", "hoc van", "university", "truong", "sgu", "saigon university", "student", "degree"]),
      reply: `🎓 **Học vấn:**\n\n📍 **Đại học Sài Gòn (SGU)** — Khoa Công nghệ Thông tin\n\nKiet đang theo đuổi hướng **Machine Learning / Computer Vision / Deep Learning** và luôn ưu tiên bài toán có thể ứng dụng thực tế.\n\nNếu cần, mình có thể tóm tắt phần này theo kiểu **trang trọng**, **ngắn gọn**, hoặc **phù hợp với CV**.`
    },
    {
      topic: "contact",
      test: ({ norm }) => includesAny(norm, ["contact", "lien he", "email", "hire", "tuyen dung", "viec lam", "collaborate", "hop tac", "reach out"]),
      reply: `📬 **Liên hệ với Kiet:**\n\n📧 **Email:** truongquockiet1211@gmail.com\n💼 **LinkedIn:** linkedin.com/in/kiet-truong-63b302306\n🐙 **GitHub:** github.com/Kietnehi\n📸 **Instagram:** @kitnehi_18\n\nNếu bạn muốn hợp tác về AI/ML, web app, hoặc hackathon project, cứ nhắn nhé.`
    },
    {
      topic: "github",
      test: ({ norm }) => includesAny(norm, ["github", "repository", "repo", "open source", "source code"]),
      reply: `🐙 **GitHub của Kiet:** [github.com/Kietnehi](https://github.com/Kietnehi)\n\nTrên GitHub có các project về AI/ML, web app, scraping, OCR, và các thử nghiệm cá nhân. Nếu bạn muốn, mình cũng có thể tóm tắt theo từng repo nổi bật.`
    },
    {
      topic: "cv",
      test: ({ norm }) => includesAny(norm, ["cv", "resume", "download cv", "tai cv", "curriculum vitae"]),
      reply: `📄 **CV của Kiet** có thể tải từ nút **Download CV** ở đầu trang.\n\nNếu bạn cần, mình cũng có thể giúp bạn viết lại phần **Experience / Projects / Competitions** sao cho gọn và mạnh hơn cho CV.`
    },
    {
      topic: "favorite_project",
      test: ({ norm }) => includesAny(norm, ["favorite project", "best project", "noi bat nhat", "important project", "most important"]),
      reply: `⭐ **Project nổi bật nhất hiện tại:** **SmartGov Copilot / GovVoice AI**\n\nVì project này kết hợp được nhiều mảng cùng lúc: AI, OCR, Voice AI, eKYC, dashboard và workflow thực tế cho dịch vụ công. Nó cũng thể hiện rõ hướng mình muốn đi: AI có tính ứng dụng cao và phục vụ con người trực tiếp.`
    },
    {
      topic: "thanks",
      test: ({ norm }) => includesAny(norm, ["thank", "cam on", "thanks", "tks", "merci"]),
      reply: `😊 Không có gì! Rất vui được giúp bạn.\n\nNếu muốn xem thêm project hoặc cuộc thi nào, cứ hỏi thẳng tên nhé.`
    },
    {
      topic: "help",
      test: ({ norm }) => includesAny(norm, ["help", "menu", "what can", "ban co the lam gi", "option", "goi y", "can giup gi"]),
      reply: `💡 **Mình có thể giúp bạn tìm hiểu về:**\n\n👋 About / Giới thiệu\n🛠️ Skills & Tech Stack\n💼 Projects\n🏆 Competitions & Hackathons\n🎓 Education\n📬 Contact Info\n🐙 GitHub\n📄 CV\n⭐ SmartGov Copilot\n\nBạn cũng có thể hỏi theo tên project, ví dụ: “Tell me about SmartGov” hoặc “What is VNPT Hackathon?”`
    },
    {
      topic: "easter_egg",
      test: ({ norm }) => includesAny(norm, ["secret", "easter egg", "trung phuc sinh", "code", "an", "bi mat"]),
      reply: `🎉 **Chúc mừng!** Bạn đã tìm thấy Trứng Phục Sinh (Easter Egg) bí mật! \n\nChúc bạn có một ngày làm việc tràn đầy niềm vui, sức khỏe và năng lượng tích cực! KietAI đã phóng pháo hoa chúc mừng bạn đó! ✨`
    }
  ];

  const TOPIC_FOLLOWUPS = {
    about: `Nếu muốn, mình có thể tóm tắt Phu Kiet theo 3 kiểu: **1 câu**, **3 gạch đầu dòng**, hoặc **đoạn giới thiệu cho CV/LinkedIn**.`,
    skills: `Mình có thể bóc riêng thành: **AI/ML**, **Web**, **DevOps**, hoặc **Database**.`,
    focus: `Mình có thể chỉ ra **project nào phản ánh đúng hướng này nhất** hoặc **cách Kiet học / nghiên cứu**.`,
    projects: `Bạn có thể hỏi tên một project cụ thể, ví dụ **SmartGov**, **VNPT**, hoặc **UAV Flood Detection**.`,
    smartgov: `Mình có thể kể sâu hơn về **workflow**, **tech stack**, hoặc **đóng góp của Kiet trong project này**.`,
    vnpt: `Mình có thể kể sâu hơn về **ý tưởng**, **vai trò AI**, hoặc **lý do project này phù hợp để nói trong phỏng vấn**.`,
    cursor: `Mình có thể đi sâu vào **pipeline thị giác máy tính** hoặc **cách project hỗ trợ cứu hộ**.`,
    competition: `Mình có thể tóm tắt theo dạng **tên cuộc thi + bài toán + kết quả** để dễ đọc hơn.`,
    education: `Mình có thể viết lại phần này theo phong cách **trang trọng**, **ngắn gọn**, hoặc **phù hợp với CV**.`,
    github: `Nếu bạn muốn, mình có thể chọn ra các repo nên được nhấn mạnh nhất trên portfolio.`,
    cv: `Nếu bạn cần, mình có thể giúp chỉnh câu chữ để phần CV nhìn mạnh hơn và ngắn hơn.`,
    contact: `Mình cũng có thể gộp thông tin này thành một dòng ngắn gọn để dùng cho CV hoặc footer.`,
    favorite_project: `Nếu bạn muốn, mình có thể giải thích vì sao SmartGov nổi bật nhất theo góc nhìn **impact**, **scope**, hoặc **skill coverage**.`,
    help: `Mình có thể gợi ý câu hỏi tiếp theo theo đúng mục bạn đang quan tâm.`,
    easter_egg: `Nếu thích, mình còn có thể bật vài câu trả lời “ẩn” thú vị khác nữa.`
  };

  const FOLLOWUP_TRIGGERS = [
    "more",
    "chi tiet",
    "detail",
    "details",
    "tell me more",
    "more about",
    "expand",
    "go deeper",
    "say more",
    "noi ro hon",
    "them",
    "further",
  ];

  function getReply(text) {
    const raw = (text || "").trim();
    const norm = normalizeText(raw);
    const isFollowup = FOLLOWUP_TRIGGERS.some(term => norm.includes(term));
    if (isFollowup && lastTopic && TOPIC_FOLLOWUPS[lastTopic]) {
      return TOPIC_FOLLOWUPS[lastTopic];
    }

    for (const item of KB) {
      try {
        if (item.test({ raw, norm })) {
          lastTopic = item.topic || null;
          return item.reply;
        }
      } catch(e) {}
    }
    if (lastTopic && TOPIC_FOLLOWUPS[lastTopic]) {
      return `Mình chưa bắt đúng ý câu này, nhưng nếu bạn đang hỏi tiếp về chủ đề trước thì:\n\n${TOPIC_FOLLOWUPS[lastTopic]}`;
    }

    return `🤔 Mình chưa bắt đúng câu hỏi này.\n\nBạn có thể thử hỏi theo chủ đề cụ thể như:\n• **SmartGov**\n• **VNPT Hackathon**\n• **Cursor Hackathon**\n• **skills / tech stack**\n• **projects**\n• **education**\n• **contact / email**\n\nHoặc gõ **help** để xem danh sách đầy đủ nhé!`;
  }

  // ── Confetti effect ──────────────────────────────────────────
  function fireConfetti() {
    const colors = ['#6366f1', '#ec4899', '#10b981', '#fb923c', '#3b82f6'];
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.className = 'chat-confetti-particle';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = Math.random() * 100 + '%';
      p.style.top = '100%';
      const size = Math.random() * 8 + 5;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
      
      const xVel = (Math.random() - 0.5) * 120;
      const yVel = -(Math.random() * 180 + 100);
      const rot = Math.random() * 360;
      
      p.style.setProperty('--x', xVel + 'px');
      p.style.setProperty('--y', yVel + 'px');
      p.style.setProperty('--r', rot + 'deg');
      
      elWindow.appendChild(p);
      setTimeout(() => p.remove(), 1200);
    }
  }

  // ── Render helpers ───────────────────────────────────────────
  function formatText(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="chat-code">$1</code>')
      .replace(/• (.+?)(?=\n|<br>|$)/g, '• <span class="chat-list-item">$1</span>')
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener" class="chat-link">$1</a>')
      .replace(/\n/g, '<br>');
  }

  function addMessage(text, sender) {
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg ' + sender;
    if (sender === 'bot') {
      const av = document.createElement('div');
      av.className = 'chat-msg-avatar';
      av.textContent = '🤖';
      wrap.appendChild(av);
    }
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = formatText(text);
    wrap.appendChild(bubble);
    elMessages.appendChild(wrap);
    elMessages.scrollTop = elMessages.scrollHeight;
  }

  function showTyping() {
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg bot';
    wrap.id = 'chat-typing-indicator';
    const av = document.createElement('div');
    av.className = 'chat-msg-avatar';
    av.textContent = '🤖';
    const dots = document.createElement('div');
    dots.className = 'chat-typing';
    dots.innerHTML = '<span></span><span></span><span></span>';
    wrap.appendChild(av);
    wrap.appendChild(dots);
    elMessages.appendChild(wrap);
    elMessages.scrollTop = elMessages.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById('chat-typing-indicator');
    if (t) t.remove();
  }

  // ── Dynamic Suggestions Chips ────────────────────────────────
  function updateSuggestions(userText) {
    const norm = normalizeText(userText);
    const suggestionsContainer = document.getElementById('chat-suggestions');
    if (!suggestionsContainer) return;
    
    let chips = [];
    if (includesAny(norm, ['project', 'du an', 'built', 'build', 'portfolio'])) {
      chips = [
        { label: '🏆 SmartGov', q: 'Tell me about SmartGov Copilot' },
        { label: '🔵 VNPT Hack', q: 'Tell me about VNPT Hackathon' },
        { label: '🟠 Cursor UAV', q: 'Tell me about Cursor Hackathon' },
        { label: '🔙 Main Menu', q: 'help' }
      ];
    } else if (includesAny(norm, ['skill', 'ky nang', 'tech stack', 'cong nghe', 'stack'])) {
      chips = [
        { label: '🤖 AI/ML Stack', q: 'What is your AI/ML stack?' },
        { label: '💻 Web Stack', q: 'What is your Web Dev stack?' },
        { label: '☁️ DevOps Stack', q: 'What is your DevOps stack?' },
        { label: '🔙 Main Menu', q: 'help' }
      ];
    } else if (includesAny(norm, ['smartgov', 'govvoice'])) {
      chips = [
        { label: '🥈 Competitions', q: 'Tell me about your competitions' },
        { label: '💼 Other Projects', q: 'Tell me about your projects' },
        { label: '🔙 Main Menu', q: 'help' }
      ];
    } else if (includesAny(norm, ['contact', 'lien he', 'email'])) {
      chips = [
        { label: '🐙 GitHub', q: 'Tell me about your GitHub' },
        { label: '📄 Download CV', q: 'Tell me about your CV' },
        { label: '🔙 Main Menu', q: 'help' }
      ];
    } else {
      chips = [
        { label: '🧠 Skills', q: 'What are your skills and tech stack?' },
        { label: '🏆 SmartGov', q: 'Tell me about SmartGov Copilot' },
        { label: '🥇 Competitions', q: 'Tell me about your competitions and hackathons' },
        { label: '💼 Projects', q: 'Tell me about your projects' },
        { label: '📬 Contact', q: 'How to contact you?' },
        { label: '👋 About', q: 'Tell me about yourself' }
      ];
    }
    
    suggestionsContainer.innerHTML = '';
    chips.forEach(chip => {
      const btn = document.createElement('button');
      btn.className = 'chat-suggest';
      btn.dataset.q = chip.q;
      btn.textContent = chip.label;
      btn.addEventListener('click', () => {
        const wasOpen = isOpen;
        if (!wasOpen) openChat();
        setTimeout(() => sendMessage(chip.q), wasOpen ? 0 : 600);
      });
      suggestionsContainer.appendChild(btn);
    });
  }

  function botReply(userText) {
    showTyping();
    setTimeout(() => {
      removeTyping();
      const replyText = getReply(userText);
      addMessage(replyText, 'bot');
      updateSuggestions(userText);
      
      // Auto confetti on achievements or secrets
      const positiveIcons = ['🏆', '🥇', '⭐', '🎉', '✨', 'Top 32'];
      const shouldConfetti = positiveIcons.some(icon => replyText.includes(icon));
      if (shouldConfetti) {
        setTimeout(fireConfetti, 300);
      }
    }, 700 + Math.random() * 400);
  }

  function sendMessage(text) {
    text = (text || '').trim();
    if (!text) return;
    addMessage(text, 'user');
    elInput.value = '';
    botReply(text);
  }

  // ── Open / Close ─────────────────────────────────────────────
  function openChat() {
    if (isOpen) return;
    isOpen = true;
    elWindow.classList.remove('chat-hidden');
    elIconOpen.style.display = 'none';
    elIconClose.style.display = 'block';
    elBadge.style.display = 'none';
    if (elMessages.children.length === 0) {
      addMessage('👋 Xin chào! Mình là **KietAI** — trợ lý AI của Phu Kiet.\n\nBạn muốn biết gì? Hãy hỏi hoặc chọn gợi ý bên dưới!', 'bot');
    }
    updateSuggestions('');
    setTimeout(() => elInput.focus(), 200);
  }

  function closeChat() {
    if (!isOpen) return;
    isOpen = false;
    elWindow.classList.add('chat-hidden');
    elIconOpen.style.display = 'block';
    elIconClose.style.display = 'none';
  }

  // ── Event listeners ──────────────────────────────────────────
  elToggle.addEventListener('click', () => isOpen ? closeChat() : openChat());
  if (elClose) {
    elClose.addEventListener('click', closeChat);
  }

  elSend.addEventListener('click', () => sendMessage(elInput.value));

  elInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); sendMessage(elInput.value); }
  });

  if (elClear) {
    elClear.addEventListener('click', () => {
      elMessages.innerHTML = '';
      lastTopic = null;
      addMessage('Chat đã xóa! Mình có thể giúp gì cho bạn? 😊', 'bot');
      updateSuggestions('');
    });
  }

  // Initial call to set suggestion handlers
  updateSuggestions('');
})();


// ===== NEURAL NETWORK PARTICLES =====
(function () {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const isDark = () => document.documentElement.classList.contains('dark');

  let W, H, nodes = [];
  const COUNT = window.innerWidth < 768 ? 40 : 70;
  const MAX_DIST = 140;

  function resize() {
    const section = canvas.parentElement;
    W = canvas.width  = section.offsetWidth;
    H = canvas.height = section.offsetHeight;
  }

  function randBetween(a, b) { return a + Math.random() * (b - a); }

  function init() {
    resize();
    nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: randBetween(-0.3, 0.3),
      vy: randBetween(-0.3, 0.3),
      r: randBetween(2, 4),
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const dark = isDark();
    const nodeColor = dark ? 'rgba(99,102,241,0.55)' : 'rgba(99,102,241,0.35)';
    const lineBase  = dark ? '99,102,241'            : '99,102,241';

    // Move nodes
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    // Draw lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * (dark ? 0.25 : 0.15);
          ctx.strokeStyle = `rgba(${lineBase},${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); });
  init();
  draw();
})();

// ===== COUNT-UP ANIMATION =====
function animateCountUp(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1200;
  const step = Math.ceil(duration / target);
  let current = 0;
  const timer = setInterval(() => {
    current += 1;
    el.textContent = current + suffix;
    if (current >= target) {
      el.textContent = target + suffix;
      clearInterval(timer);
    }
  }, step);
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCountUp(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

// ===== SCROLL SPY — ACTIVE NAV LINK =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('nav-link-active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('nav-link-active');
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(sec => spyObserver.observe(sec));

// ===== MACBOOK TERMINAL ANIMATION (infinite loop) =====
(function () {
  const terminalBody = document.getElementById('terminal-body');
  if (!terminalBody) return;

  const PROMPT = 'kietnehi@macbook ~ % ';
  const PAUSE_AFTER_DONE = 1800; // ms to show completed screen before clearing

  const lines = [
    { type: 'cmd',   cmd: 'whoami' },
    { type: 'out',   parts: [{ cls: 'term-green', text: 'Truong Phu Kiet' }, { cls: 'term-comment', text: '  —  AI / ML Engineer & Computer Vision Enthusiast' }] },
    { type: 'blank' },

    { type: 'cmd',   cmd: 'cat about.txt' },
    { type: 'out',   parts: [{ cls: 'term-blue',   text: '🎓 ' }, { cls: '', text: 'IT Student @ Saigon University (SGU)' }] },
    { type: 'out',   parts: [{ cls: 'term-purple', text: '🧠 ' }, { cls: '', text: 'Passionate about Deep Learning & Computer Vision' }] },
    { type: 'out',   parts: [{ cls: 'term-yellow', text: '🤖 ' }, { cls: '', text: 'Building intelligent systems that see like humans' }] },
    { type: 'blank' },

    { type: 'cmd',   cmd: 'ls skills/' },
    { type: 'out',   parts: [
        { cls: 'term-green',  text: 'Python   ' },
        { cls: 'term-blue',   text: 'PyTorch   ' },
        { cls: 'term-yellow', text: 'TensorFlow   ' },
        { cls: 'term-pink',   text: 'OpenCV   ' },
        { cls: 'term-purple', text: 'YOLO' },
    ]},
    { type: 'out',   parts: [
        { cls: 'term-green',  text: 'LangChain   ' },
        { cls: 'term-blue',   text: 'FastAPI   ' },
        { cls: 'term-yellow', text: 'Scikit-learn   ' },
        { cls: 'term-pink',   text: 'Docker' },
    ]},
    { type: 'blank' },

    { type: 'cmd',   cmd: 'git log --oneline -4' },
    { type: 'out',   parts: [{ cls: 'term-yellow', text: 'a3f1b2c ' }, { cls: '', text: '🧠 Trained YOLO model for real-time object detection' }] },
    { type: 'out',   parts: [{ cls: 'term-yellow', text: '7d4e9a1 ' }, { cls: '', text: '🎯 Built RAG pipeline with LangChain + ChromaDB' }] },
    { type: 'out',   parts: [{ cls: 'term-yellow', text: '2c8f0e5 ' }, { cls: '', text: '🖼️  Image classification with ResNet — 94% accuracy' }] },
    { type: 'out',   parts: [{ cls: 'term-yellow', text: '1a9b3d7 ' }, { cls: '', text: '🤖 AI Agent with multi-tool & memory support' }] },
    { type: 'blank' },

    { type: 'cmd',   cmd: './run_passion.sh' },
    { type: 'out',   parts: [{ cls: 'term-comment', text: '# Initializing...' }] },
    { type: 'out',   parts: [{ cls: 'term-green',  text: '██████████ ' }, { cls: 'term-blue', text: '100%  ' }, { cls: '', text: 'Ready.' }] },
    { type: 'out',   parts: [{ cls: 'term-pink',   text: '"Turning data into intelligence, one model at a time." ✨' }] },
  ];

  function buildLine(entry) {
    const div = document.createElement('div');
    div.className = 'term-line';
    if (entry.type === 'blank') {
      div.innerHTML = '&nbsp;';
      return div;
    }
    if (entry.type === 'cmd') {
      const p = document.createElement('span');
      p.className = 'term-prompt';
      p.textContent = PROMPT;
      div.appendChild(p);
      const c = document.createElement('span');
      c.className = 'term-cmd';
      c.textContent = entry.cmd;
      div.appendChild(c);
      return div;
    }
    if (entry.type === 'out') {
      entry.parts.forEach(part => {
        const s = document.createElement('span');
        s.className = part.cls ? `term-out ${part.cls}` : 'term-out';
        s.textContent = part.text;
        div.appendChild(s);
      });
      return div;
    }
    return div;
  }

  // Show a blinking cursor line at the bottom
  function appendCursor() {
    const div = document.createElement('div');
    div.className = 'term-line visible';
    div.id = 'term-cursor-line';
    const p = document.createElement('span');
    p.className = 'term-prompt';
    p.textContent = PROMPT;
    div.appendChild(p);
    const cur = document.createElement('span');
    cur.className = 'term-cursor';
    div.appendChild(cur);
    terminalBody.appendChild(div);
  }

  function removeCursor() {
    const cur = document.getElementById('term-cursor-line');
    if (cur) cur.remove();
  }

  // Fade-out all lines, then clear, then restart
  function clearAndRestart() {
    const allLines = terminalBody.querySelectorAll('.term-line');
    allLines.forEach(l => {
      l.style.transition = 'opacity 0.4s ease';
      l.style.opacity = '0';
    });
    setTimeout(() => {
      terminalBody.innerHTML = '';
      runLoop();
    }, 500);
  }

  function runLoop() {
    let delay = 0;
    lines.forEach((entry, i) => {
      const gap = entry.type === 'cmd' ? 500 : entry.type === 'blank' ? 100 : 200;
      delay += gap;
      setTimeout(() => {
        removeCursor();
        const el = buildLine(entry);
        terminalBody.appendChild(el);
        requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('visible')));
        // After last line, show cursor then loop
        if (i === lines.length - 1) {
          setTimeout(() => {
            appendCursor();
            setTimeout(clearAndRestart, PAUSE_AFTER_DONE);
          }, 300);
        }
      }, delay);
    });
  }

  // Start when terminal scrolls into view
  const termSection = document.getElementById('mac-terminal');
  if (termSection) {
    const termObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runLoop();
        termObs.disconnect();
      }
    }, { threshold: 0.3 });
    termObs.observe(termSection);
  }
})();
