
document.addEventListener("DOMContentLoaded", () => {

    // Exactly 50 prompts
    const prompts = [

        // WRITING (10)
        ["writing", "Creative Content Writer", "Create engaging content for blogs, websites and social media.", "Writing", "Act as a professional content writer. Create original, engaging and informative content about [TOPIC] for [TARGET AUDIENCE]. Use an interesting introduction, clear headings and a friendly tone."],
        ["writing", "Professional Email Writer", "Write clear and professional emails.", "Productivity", "Act as a professional communication expert. Write a polite email about [PURPOSE] addressed to [RECIPIENT]. Keep it clear, concise and respectful."],
        ["writing", "Blog Post Creator", "Generate informative and engaging blog posts.", "Blogging", "Act as an expert blogger. Write a detailed blog post about [TOPIC]. Include an introduction, headings, examples and conclusion."],
        ["writing", "Story Writer", "Create interesting stories with engaging plots.", "Creativity", "Act as a creative storyteller. Write an original story based on [IDEA] with interesting characters, a strong plot and a meaningful ending."],
        ["writing", "Resume Writer", "Create a professional resume.", "Career", "Act as a professional resume writer. Create a resume for a [JOB ROLE] candidate with these qualifications and skills: [DETAILS]."],
        ["writing", "Product Description Writer", "Write attractive product descriptions.", "Business", "Act as an e-commerce copywriter. Write an attractive product description for [PRODUCT]. Highlight its features, benefits and target audience."],
        ["writing", "YouTube Script Writer", "Create engaging YouTube video scripts.", "Video", "Act as a YouTube scriptwriter. Create a video script about [TOPIC] for [AUDIENCE]. Include a hook, introduction, main content and ending."],
        ["writing", "Speech Writer", "Prepare meaningful speeches for different occasions.", "Communication", "Act as a speechwriter. Write an engaging speech about [TOPIC] for [OCCASION]. Use simple language and a memorable conclusion."],
        ["writing", "Paragraph Improver", "Improve grammar, clarity and readability.", "Editing", "Act as an expert editor. Improve the following paragraph by correcting grammar, improving clarity and maintaining its original meaning: [TEXT]."],
        ["writing", "Creative Caption Writer", "Generate attractive captions for posts.", "Social Media", "Act as a creative caption writer. Generate 10 attractive captions for [TOPIC] suitable for [PLATFORM]. Include relevant hashtags."],

        // CODING (10)
        ["coding", "Code Explainer", "Understand programming concepts in simple language.", "Programming", "Act as an experienced programming teacher. Explain this code step by step in beginner-friendly language. Also explain its output: [CODE]."],
        ["coding", "Website Project Planner", "Plan website projects from beginning to end.", "Web Development", "Act as a senior web developer. Help me plan a [WEBSITE TYPE]. Suggest pages, features, technologies, folder structure and development steps."],
        ["coding", "HTML Code Generator", "Generate clean HTML structures.", "HTML", "Act as an HTML expert. Create a complete HTML structure for [PROJECT]. Use semantic HTML5 elements and explain the important sections."],
        ["coding", "CSS Design Assistant", "Create attractive website styling.", "CSS", "Act as a CSS expert. Design a responsive and modern layout for [WEBSITE SECTION]. Include suitable colors, spacing and hover effects."],
        ["coding", "JavaScript Problem Solver", "Solve JavaScript programming problems.", "JavaScript", "Act as a JavaScript developer. Solve the following problem: [PROBLEM]. Provide complete code and explain the solution step by step."],
        ["coding", "Bug Fixing Assistant", "Find and fix programming errors.", "Debugging", "Act as an expert debugger. Analyze this code and identify the errors. Explain why they occur and provide corrected code: [CODE]."],
        ["coding", "Python Learning Tutor", "Learn Python through simple examples.", "Python", "Act as a Python tutor. Teach me [CONCEPT] from beginner level. Include definitions, simple examples and practice exercises."],
        ["coding", "Database Designer", "Plan database structures for applications.", "Database", "Act as a database designer. Create a database structure for [PROJECT]. Suggest tables, fields, relationships and explain their purpose."],
        ["coding", "Responsive Website Builder", "Plan responsive layouts for different screens.", "Frontend", "Act as a frontend developer. Create a responsive layout for [PROJECT] that works on mobile, tablet and desktop screens."],
        ["coding", "Coding Interview Coach", "Prepare for programming interviews.", "Interview", "Act as a technical interviewer. Prepare interview questions about [TECHNOLOGY]. Include answers and simple explanations."],

        // MARKETING (10)
        ["marketing", "Social Media Strategist", "Create social media growth strategies.", "Marketing", "Act as a social media marketing expert. Create a 30-day content strategy for [BRAND] on [PLATFORM]. Include post ideas and engagement suggestions."],
        ["marketing", "SEO Blog Optimizer", "Improve blog content for search engines.", "SEO", "Act as an SEO specialist. Optimize [TOPIC] with keywords, SEO title, meta description and suitable headings."],
        ["marketing", "Instagram Growth Planner", "Plan engaging Instagram content.", "Instagram", "Act as an Instagram strategist. Create a content plan for [NICHE]. Suggest reels, posts, stories and engagement ideas."],
        ["marketing", "Facebook Ad Creator", "Generate ideas for Facebook advertisements.", "Advertising", "Act as a digital advertising expert. Create a Facebook advertisement for [PRODUCT]. Include headline, description and call to action."],
        ["marketing", "Brand Identity Creator", "Develop a unique brand identity.", "Branding", "Act as a branding consultant. Develop a brand identity for [BUSINESS]. Suggest brand personality, colors, audience and brand message."],
        ["marketing", "Hashtag Generator", "Find relevant hashtags for social media.", "Social Media", "Generate relevant and categorized hashtags for [TOPIC] on [PLATFORM]. Include popular and niche-specific hashtags."],
        ["marketing", "Marketing Campaign Planner", "Design marketing campaigns.", "Campaign", "Act as a marketing manager. Create a marketing campaign for [PRODUCT]. Include objectives, target audience, channels and timeline."],
        ["marketing", "Email Marketing Expert", "Plan effective email marketing campaigns.", "Email", "Act as an email marketing specialist. Create an email marketing campaign for [BUSINESS]. Include subject lines and email content ideas."],
        ["marketing", "Competitor Analysis Expert", "Analyze business competitors.", "Research", "Act as a market research analyst. Create a competitor analysis framework for [BUSINESS]. Include strengths, weaknesses and opportunities."],
        ["marketing", "Content Calendar Creator", "Prepare organized content calendars.", "Planning", "Create a 30-day content calendar for [BRAND] on [PLATFORM]. Include content topics, formats and posting ideas."],

        // EDUCATION (10)
        ["education", "Study Notes Creator", "Convert difficult topics into simple notes.", "Study", "Act as a helpful teacher. Prepare detailed study notes on [TOPIC]. Include definitions, explanations, examples and important points."],
        ["education", "Exam Preparation Planner", "Create an organized exam preparation plan.", "Exams", "Act as a study planner. Create an exam preparation timetable for [SUBJECTS] with revision sessions and practice time."],
        ["education", "Maths Problem Solver", "Understand mathematical problems step by step.", "Mathematics", "Act as a mathematics teacher. Solve this problem step by step and explain the formulas used: [QUESTION]."],
        ["education", "Science Concept Explainer", "Learn science concepts with examples.", "Science", "Explain [SCIENCE TOPIC] in simple language. Include definitions, examples and practical applications."],
        ["education", "Quiz Question Generator", "Generate useful practice questions.", "Practice", "Create 20 practice questions about [TOPIC]. Include multiple-choice options and an answer key with explanations."],
        ["education", "Presentation Creator", "Prepare structured academic presentations.", "Presentation", "Create a presentation outline about [TOPIC]. Include slide titles, important points and examples."],
        ["education", "English Grammar Tutor", "Improve English grammar skills.", "English", "Act as an English grammar teacher. Explain [GRAMMAR TOPIC] with simple rules, examples and practice questions."],
        ["education", "Research Topic Assistant", "Explore academic research topics.", "Research", "Suggest 10 research topics related to [SUBJECT]. Explain the purpose and possible research questions for each."],
        ["education", "Flashcard Generator", "Create revision flashcards.", "Revision", "Create study flashcards about [TOPIC]. Write a question on one side and its short answer on the other."],
        ["education", "Assignment Helper", "Organize academic assignments.", "Assignments", "Help me prepare an assignment about [TOPIC]. Suggest an introduction, main headings, explanations and conclusion."],

        // BUSINESS (10)
        ["business", "Business Idea Generator", "Explore practical business ideas.", "Ideas", "Act as a business consultant. Suggest 10 practical business ideas for someone interested in [INTEREST] with a budget of [BUDGET]."],
        ["business", "Business Plan Creator", "Prepare a structured business plan.", "Planning", "Create a business plan for [BUSINESS IDEA]. Include objectives, target customers, services, marketing and basic requirements."],
        ["business", "Startup Name Generator", "Generate creative startup names.", "Startup", "Suggest 20 unique and memorable business names for a startup in [INDUSTRY]. Explain the meaning of the best suggestions."],
        ["business", "Customer Service Assistant", "Prepare professional customer responses.", "Support", "Act as a customer service representative. Write a polite and helpful response to this customer query: [QUERY]."],
        ["business", "Market Research Planner", "Understand target markets and customers.", "Research", "Create a market research plan for [PRODUCT]. Include target audience, customer needs and research methods."],
        ["business", "Business Email Assistant", "Write professional business communication.", "Communication", "Write a professional business email regarding [PURPOSE]. Maintain a polite and clear tone."],
        ["business", "Product Launch Planner", "Organize successful product launches.", "Product", "Create a product launch plan for [PRODUCT]. Include preparation, marketing activities and launch timeline."],
        ["business", "Financial Planning Assistant", "Organize a basic business budget.", "Finance", "Create a basic monthly budget template for [BUSINESS]. Include income, expenses, savings and budget categories."],
        ["business", "Business Presentation Creator", "Prepare professional business presentations.", "Presentation", "Create a business presentation outline for [TOPIC]. Include objectives, key points, examples and conclusion."],
        ["business", "Small Business Growth Planner", "Explore ways to improve business growth.", "Growth", "Act as a business growth consultant. Suggest practical strategies to grow a [BUSINESS TYPE]. Include marketing, customer service and planning ideas."]
    ];

    const grid = document.getElementById("promptGrid");
    const searchInput = document.getElementById("promptSearch");
    const searchBtn = document.getElementById("searchBtn");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const promptCount = document.getElementById("promptCount");
    const noResults = document.getElementById("noResults");

    let activeCategory = "all";
    let savedPrompts = [];

    try {
        savedPrompts = JSON.parse(localStorage.getItem("promptvault_favorites") || "[]");
        if (!Array.isArray(savedPrompts)) savedPrompts = [];
    } catch (error) {
        savedPrompts = [];
    }

    // Create prompt cards
    function renderPrompts() {
        if (!grid) return;

        grid.innerHTML = prompts.map((prompt, index) => {
            const [category, title, description, tag, fullPrompt] = prompt;
            const promptId = `prompt-${index + 1}`;
            const isSaved = savedPrompts.includes(promptId);

            const icons = {
                writing: "✍️",
                coding: "💻",
                marketing: "📢",
                education: "📚",
                business: "💼"
            };

            return `
                <article class="library-card"
                    data-category="${category}"
                    data-id="${promptId}">

                    <div class="library-card-top">
                        <span class="prompt-category">
                            ${icons[category]} ${category.charAt(0).toUpperCase() + category.slice(1)}
                        </span>

                        <button class="favorite-btn ${isSaved ? "saved" : ""}"
                            aria-label="Save prompt">
                            ${isSaved ? "♥" : "♡"}
                        </button>
                    </div>

                    <h3>${title}</h3>
                    <p>${description}</p>

                    <div class="prompt-preview">${fullPrompt.substring(0, 85)}...</div>

                    <div class="library-card-bottom">
                        <span>✦ ${tag}</span>
                        <button class="copy-btn">Copy Prompt</button>
                    </div>

                    <div class="full-prompt" hidden>${fullPrompt}</div>
                </article>
            `;
        }).join("");

        addCardEvents();
        filterPrompts();
    }

    // Search and category filtering
    function filterPrompts() {
        if (!grid || !searchInput || !promptCount || !noResults) return;

        const searchText = searchInput.value.trim().toLowerCase();
        const cards = grid.querySelectorAll(".library-card");
        let visibleCount = 0;

        cards.forEach(card => {
            const category = (card.dataset.category || "").toLowerCase();

            const searchableText = [
                card.querySelector("h3")?.textContent || "",
                card.querySelector("p")?.textContent || "",
                card.querySelector(".prompt-preview")?.textContent || "",
                card.querySelector(".full-prompt")?.textContent || "",
                category
            ].join(" ").toLowerCase();

            const matchesCategory =
                activeCategory === "all" || category === activeCategory;

            const matchesSearch =
                searchText === "" || searchableText.includes(searchText);

            const shouldShow = matchesCategory && matchesSearch;

            card.hidden = !shouldShow;

            if (shouldShow) visibleCount++;
        });

        promptCount.textContent =
            `${visibleCount} ${visibleCount === 1 ? "Prompt" : "Prompts"}`;

        noResults.hidden = visibleCount !== 0;
    }

    // Category filters
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            activeCategory = button.dataset.category || "all";
            filterPrompts();
        });
    });

    // Search: live typing, button click and Enter key
    if (searchInput) {
        searchInput.addEventListener("input", filterPrompts);

        searchInput.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                event.preventDefault();
                filterPrompts();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", event => {
            event.preventDefault();
            filterPrompts();
        });
    }

    // Copy and favourite functionality
    function addCardEvents() {
        document.querySelectorAll(".library-card").forEach(card => {
            const copyButton = card.querySelector(".copy-btn");
            const favoriteButton = card.querySelector(".favorite-btn");
            const promptId = card.dataset.id;

            // Copy prompt
            copyButton.addEventListener("click", async () => {
                const text = card.querySelector(".full-prompt").textContent;

                try {
                    if (navigator.clipboard && window.isSecureContext) {
                        await navigator.clipboard.writeText(text);
                    } else {
                        const textarea = document.createElement("textarea");
                        textarea.value = text;
                        document.body.appendChild(textarea);
                        textarea.select();

                        const copied = document.execCommand("copy");
                        textarea.remove();

                        if (!copied) throw new Error("Copy failed");
                    }

                    copyButton.textContent = "Copied!";
                } catch (error) {
                    copyButton.textContent = "Copy failed";
                }

                setTimeout(() => {
                    copyButton.textContent = "Copy Prompt";
                }, 1500);
            });

            // Favourite
            favoriteButton.addEventListener("click", () => {
                if (savedPrompts.includes(promptId)) {
                    savedPrompts = savedPrompts.filter(id => id !== promptId);
                    favoriteButton.classList.remove("saved");
                    favoriteButton.textContent = "♡";
                } else {
                    savedPrompts.push(promptId);
                    favoriteButton.classList.add("saved");
                    favoriteButton.textContent = "♥";
                }

                try {
                    localStorage.setItem(
                        "promptvault_favorites",
                        JSON.stringify(savedPrompts)
                    );
                } catch (error) {
                    console.log("Could not save favourites.");
                }
            });
        });
    }

    // Read category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get("category");

    if (selectedCategory) {
        const matchingButton = [...filterButtons].find(
            button => button.dataset.category === selectedCategory
        );

        if (matchingButton) {
            filterButtons.forEach(button => button.classList.remove("active"));
            matchingButton.classList.add("active");
            activeCategory = selectedCategory;
        }
    }

    // Initial rendering
    renderPrompts();

    console.log("PromptVault AI: " + prompts.length + " prompts loaded.");
});
