document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
    }
    
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Prompt data
    const prompts = {
        writing: [
            "Write a story about a character who discovers they can time travel, but only to moments of personal regret.",
            "Create a dialogue between two people who are clearly lying to each other, but neither will admit it.",
            "Describe a city where emotions are visible as colors in the air around people.",
            "Write a letter from the perspective of an inanimate object in your home.",
            "Compose a poem about the last dream you remember having."
        ],
        art: [
            "Draw a futuristic city where nature has reclaimed most of the structures.",
            "Create a portrait of a person made entirely of their favorite things.",
            "Illustrate a scene where the laws of physics don't apply in one specific way.",
            "Design a creature that lives in an environment with extreme conditions.",
            "Paint a landscape using only shades of one color plus black and white."
        ],
        coding: [
            "Build a program that generates random writing prompts (meta, right?).",
            "Create an algorithm that visualizes sorting methods in an artistic way.",
            "Develop a small game where the player controls two characters simultaneously.",
            "Write a script that analyzes your most used words in text messages.",
            "Design an interactive data visualization about your daily habits."
        ],
        ai: [
            "Imagine an AI designed to create art - what would its creative process look like?",
            "Design a chatbot that only speaks in metaphors and analogies.",
            "Conceptualize an AI assistant that helps with emotional well-being.",
            "Think of a creative use for computer vision that hasn't been done yet.",
            "Plan an AI system that could collaborate with humans on scientific discovery."
        ],
        custom: []
    };
    
    // DOM elements
    const categorySelect = document.getElementById('category');
    const generateBtn = document.getElementById('generate-btn');
    const promptDisplay = document.getElementById('prompt-display');
    const copyBtn = document.getElementById('copy-btn');
    const saveBtn = document.getElementById('save-btn');
    const shareBtn = document.getElementById('share-btn');
    const customPromptInput = document.getElementById('custom-prompt-input');
    const addPromptBtn = document.getElementById('add-prompt-btn');
    
    // Generate random prompt
    function generatePrompt() {
        const selectedCategory = categorySelect.value;
        let availablePrompts = [];
        
        if (selectedCategory === 'all') {
            // Combine all prompts from all categories
            for (const category in prompts) {
                availablePrompts = availablePrompts.concat(prompts[category]);
            }
        } else {
            availablePrompts = prompts[selectedCategory];
        }
        
        if (availablePrompts.length === 0) {
            promptDisplay.innerHTML = '<p>No prompts available for this category. Add some custom prompts!</p>';
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * availablePrompts.length);
        const selectedPrompt = availablePrompts[randomIndex];
        
        promptDisplay.classList.remove('fade-in');
        void promptDisplay.offsetWidth; // Trigger reflow
        promptDisplay.classList.add('fade-in');
        
        promptDisplay.innerHTML = <p>${selectedPrompt}</p>;
    }
    
    // Copy prompt to clipboard
    copyBtn.addEventListener('click', function() {
        const promptText = promptDisplay.textContent;
        navigator.clipboard.writeText(promptText).then(() => {
            const originalIcon = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                copyBtn.innerHTML = originalIcon;
            }, 2000);
        });
    });
    
    // Save prompt to localStorage
    saveBtn.addEventListener('click', function() {
        const promptText = promptDisplay.textContent;
        if (promptText === 'Click the button to generate a prompt.') return;
        
        let savedPrompts = JSON.parse(localStorage.getItem('savedPrompts')) || [];
        savedPrompts.push(promptText);
        localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
        
        const originalIcon = saveBtn.innerHTML;
        saveBtn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            saveBtn.innerHTML = originalIcon;
        }, 2000);
    });
    
    // Share prompt
    shareBtn.addEventListener('click', function() {
        const promptText = promptDisplay.textContent;
        if (navigator.share) {
            navigator.share({
                title: 'Check out this creative prompt!',
                text: promptText,
                url: window.location.href
            }).catch(err => {
                console.log('Error sharing:', err);
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(promptText + ' - via Prompt Generator')}`;
            window.open(twitterUrl, '_blank');
        }
    });
    
    // Add custom prompt
    addPromptBtn.addEventListener('click', function() {
        const customPrompt = customPromptInput.value.trim();
        if (customPrompt) {
            if (!prompts.custom) prompts.custom = [];
            prompts.custom.push(customPrompt);
            customPromptInput.value = '';
            
            const originalText = addPromptBtn.textContent;
            addPromptBtn.textContent = 'Added!';
            setTimeout(() => {
                addPromptBtn.textContent = originalText;
            }, 2000);
        }
    });
    
    // Event listeners
    generateBtn.addEventListener('click', generatePrompt);
    
    // Generate a prompt on page load
    generatePrompt();
});