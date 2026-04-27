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

// ===== AI CHATBOT WIDGET =====
(function () {
  const toggle   = document.getElementById('chat-toggle');
  const window_  = document.getElementById('chat-window');
  const messages = document.getElementById('chat-messages');
  const input    = document.getElementById('chat-input');
  const sendBtn  = document.getElementById('chat-send');
  const badge    = document.getElementById('chat-badge');
  const clearBtn = document.getElementById('chat-clear');
  const iconOpen = document.getElementById('chat-icon-open');
  const iconClose= document.getElementById('chat-icon-close');
  const suggests = document.querySelectorAll('.chat-suggest');

  if (!toggle) return;

  let isOpen = false;

  // ── Knowledge base ──────────────────────────────────────────
  const KB = [
    {
      keys: ['hello','hi','hey','chào','xin chào','yo','sup'],
      reply: `👋 Xin chào! Mình là **KietAI** — trợ lý AI của Phu Kiet.\n\nBạn có thể hỏi mình về kỹ năng, dự án, học vấn hoặc cách liên hệ với Kiet nhé!`
    },
    {
      keys: ['about','giới thiệu','who','bạn là ai','kiet là ai','tell me about'],
      reply: `🧑‍💻 **Phu Kiet (Kietnehi)** là sinh viên IT tại **Đại học Sài Gòn (SGU)**.\n\nKiet có đam mê sâu với **Machine Learning** và **Deep Learning for Computer Vision** — khám phá cách máy tính "nhìn" và hiểu thế giới như con người.`
    },
    {
      keys: ['skill','kỹ năng','tech','stack','công nghệ','language','ngôn ngữ','tool'],
      reply: `🛠️ **Tech Stack của Kiet:**\n\n🤖 **AI/ML:** Python, PyTorch, TensorFlow, NumPy, Scikit-learn, CUDA\n🌐 **Web:** React, Node.js, Flask, FastAPI, JavaScript\n🗄️ **Database:** MySQL, MongoDB, PostgreSQL, SQL Server\n☁️ **DevOps:** Docker, Kubernetes, AWS, Git, Grafana\n📊 **Data:** Apache Spark, Hadoop`
    },
    {
      keys: ['project','dự án','work','portfolio','làm gì','built','build'],
      reply: `💼 **Một số dự án nổi bật:**\n\n🎓 **AI FOR EDUCATION** — Nền tảng học cá nhân hóa dùng Gemini AI\n🤖 **RAG & Multimodal LLM** — Hệ thống RAG với Ollama, BLIP, Docker\n🚁 **UAV Flood Detection** — Phát hiện người trong lũ lụt bằng Computer Vision\n🔊 **Audio To YouTube AI** — Nhận dạng âm thanh & tìm nhạc trên YouTube\n\n👉 Xem tất cả tại mục **Projects** trên trang!`
    },
    {
      keys: ['competition','hackathon','cuộc thi','award','giải','contest'],
      reply: `🏆 **Competitions & Hackathons:**\n\n🔵 **VNPT Hackathon** — AI-Powered Meeting Assistant (Computer Vision + OCR + LLM + AI Agent)\n🟠 **Cursor Hackathon** — UAV-Based Flood Rescue Detection (Object Detection + Computer Vision)\n\nCả 2 đều ứng dụng AI thực tế để giải quyết vấn đề thực!`
    },
    {
      keys: ['education','học','university','trường','sgu','saigon','sinh viên','student','degree'],
      reply: `🎓 **Học vấn:**\n\n📍 **Đại học Sài Gòn (SGU)** — Khoa Công nghệ Thông tin\n\nKiet đang học và nghiên cứu chuyên sâu về **Machine Learning**, **Computer Vision**, và **Deep Learning**. Luôn tìm kiếm cơ hội ứng dụng AI vào các bài toán thực tế.`
    },
    {
      keys: ['contact','liên hệ','email','reach','hire','tuyển','việc làm','job','collaborate','hợp tác'],
      reply: `📬 **Liên hệ với Kiet:**\n\n📧 **Email:** truongquockiet1211@gmail.com\n💼 **LinkedIn:** linkedin.com/in/kiet-truong-63b302306\n🐙 **GitHub:** github.com/Kietnehi\n📸 **Instagram:** @kitnehi_18\n\nKiet luôn sẵn sàng hợp tác và trao đổi về AI/ML! 🚀`
    },
    {
      keys: ['github','repo','repository','open source','code','source'],
      reply: `🐙 **GitHub của Kiet:** [github.com/Kietnehi](https://github.com/Kietnehi)\n\nCó **15+ repositories** công khai bao gồm AI/ML projects, web apps, và research experiments. Kiet active thường xuyên với **1,000+ contributions** mỗi năm!`
    },
    {
      keys: ['ai','machine learning','ml','deep learning','computer vision','nlp','llm','neural'],
      reply: `🧠 **AI/ML Expertise của Kiet:**\n\n• **Computer Vision** — Image classification, Object detection (YOLO), Face recognition\n• **Deep Learning** — CNN, Transfer Learning, PyTorch & TensorFlow\n• **LLM & RAG** — Ollama, HuggingFace, Gemini AI, Multimodal\n• **NLP** — Text classification, Fake news detection\n• **AI Agents** — n8n workflows, autonomous systems`
    },
    {
      keys: ['help','?','hướng dẫn','option','menu','what can','bạn có thể'],
      reply: `💡 **Mình có thể giúp bạn tìm hiểu về:**\n\n👋 About Kiet\n🛠️ Skills & Tech Stack\n💼 Projects\n🏆 Competitions\n🎓 Education\n📬 Contact Info\n🐙 GitHub\n🤖 AI/ML Focus\n\nCứ hỏi thoải mái nhé!`
    },
    {
      keys: ['cv','resume','download','tải'],
      reply: `📄 **CV của Kiet** có thể tải tại nút **"Download CV"** ở đầu trang!\n\nHoặc liên hệ trực tiếp qua email: truongquockiet1211@gmail.com để nhận phiên bản mới nhất.`
    },
    {
      keys: ['thank','cảm ơn','thanks','tks','ty'],
      reply: `😊 Không có gì! Rất vui được giúp bạn.\n\nNếu bạn muốn biết thêm về Kiet hoặc có dự án thú vị muốn hợp tác, đừng ngại liên hệ nhé! 🚀`
    },
  ];

  function getReply(text) {
    const lower = text.toLowerCase().trim();
    for (const item of KB) {
      if (item.keys.some(k => lower.includes(k))) return item.reply;
    }
    return `🤔 Mình chưa có thông tin về điều đó.\n\nBạn có thể hỏi về **skills**, **projects**, **education**, **contact**, hoặc **GitHub** của Kiet nhé! Gõ "help" để xem danh sách.`;
  }

  // ── Render helpers ───────────────────────────────────────────
  function formatText(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.+?)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" style="color:#6366f1;text-decoration:underline;">$1</a>')
      .replace(/\n/g, '<br>');
  }

  function addMessage(text, sender) {
    const wrap = document.createElement('div');
    wrap.className = `chat-msg ${sender}`;

    if (sender === 'bot') {
      const av = document.createElement('div');
      av.className = 'chat-msg-avatar';
      av.innerHTML = '🤖';
      wrap.appendChild(av);
    }

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = formatText(text);
    wrap.appendChild(bubble);
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg bot';
    wrap.id = 'chat-typing-indicator';
    const av = document.createElement('div');
    av.className = 'chat-msg-avatar';
    av.innerHTML = '🤖';
    const dots = document.createElement('div');
    dots.className = 'chat-typing';
    dots.innerHTML = '<span></span><span></span><span></span>';
    wrap.appendChild(av);
    wrap.appendChild(dots);
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById('chat-typing-indicator');
    if (t) t.remove();
  }

  function botReply(userText) {
    showTyping();
    const delay = 700 + Math.random() * 500;
    setTimeout(() => {
      removeTyping();
      addMessage(getReply(userText), 'bot');
    }, delay);
  }

  function sendMessage(text) {
    text = text.trim();
    if (!text) return;
    addMessage(text, 'user');
    input.value = '';
    botReply(text);
  }

  // ── Open / Close ─────────────────────────────────────────────
  function openChat() {
    isOpen = true;
    window_.classList.remove('chat-hidden');
    iconOpen.style.display = 'none';
    iconClose.style.display = 'block';
    badge.style.display = 'none';
    if (messages.children.length === 0) {
      setTimeout(() => {
        addMessage('👋 Xin chào! Mình là **KietAI**.\n\nBạn muốn biết gì về Phu Kiet? Hãy hỏi hoặc chọn gợi ý bên dưới!', 'bot');
      }, 300);
    }
    setTimeout(() => input.focus(), 350);
  }

  function closeChat() {
    isOpen = false;
    window_.classList.add('chat-hidden');
    iconOpen.style.display = 'block';
    iconClose.style.display = 'none';
  }

  // ── Event listeners ──────────────────────────────────────────
  toggle.addEventListener('click', () => isOpen ? closeChat() : openChat());

  sendBtn.addEventListener('click', () => sendMessage(input.value));

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage(input.value);
  });

  clearBtn.addEventListener('click', () => {
    messages.innerHTML = '';
    setTimeout(() => addMessage('Chat đã được xóa! Mình có thể giúp gì cho bạn? 😊', 'bot'), 200);
  });

  suggests.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!isOpen) openChat();
      setTimeout(() => sendMessage(btn.dataset.q), isOpen ? 0 : 400);
    });
  });
})();

// ===== CUSTOM CURSOR =====
(function () {
  if (window.matchMedia('(pointer: fine)').matches) {
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';
    });

    // Ring follows with smooth lerp
    (function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(animateRing);
    })();

    // Hover effect on interactive elements
    document.querySelectorAll('a, button, [role="button"], input, label').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // Click effect
    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));
  }
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