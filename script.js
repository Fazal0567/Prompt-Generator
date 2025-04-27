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
            "Compose a poem about the last dream you remember having.",
  "Write a story about a character who discovers they can time travel, but only to moments of personal regret.",
  "Create a dialogue between two people who are clearly lying to each other, but neither will admit it.",
  "Describe a city where emotions are visible as colors in the air around people.",
  "Write a letter from the perspective of an inanimate object in your home.",
  "Compose a poem about the last dream you remember having.",
  "A scientist accidentally creates a device that translates animal thoughts—what do they discover?",
  "Two strangers meet on a train and realize they’re dreaming the same dream.",
  "A detective solves crimes by reading the last memories of the dead.",
  "A person wakes up with a tattoo they don’t remember getting—and it changes every day.",
  "A bookstore where every book is a different version of the reader’s life.",
  "A chef’s food has strange, unintended effects on those who eat it.",
  "A letter arrives, addressed to you, from a version of yourself in another universe.",
  "A town where everyone has the same recurring nightmare—except one person.",
  "A clock that counts down to an unknown event in your life.",
  "A mirror that shows you what you truly desire, not what you expect.",
  "A library where forgotten stories come to life at night.",
  "A person who can hear the whispers of ghosts—but only when it rains.",
  "A café where each cup of coffee reveals a random memory—yours or someone else’s.",
  "A diary that writes back.",
  "A door appears in your home that only opens at midnight. Where does it lead?",

  // Time & Reality  
  "A person wakes up to find everyone else frozen in time—except for one mysterious stranger.",  
  "You discover a radio that broadcasts events from 24 hours in the future.",  
  "A historian time-travels to the past but realizes their presence is what caused the disaster they were studying.",  
  "Every night, you dream of a parallel life—and one day, you switch places with your other self.",  
  "A clock runs backward in your house, and so do the events around it.",  

  // Mystery & Deception  
  "A detective realizes all the suspects in a murder case are alternate versions of the same person.",  
  "Two people are trapped in a room, each convinced the other is an AI simulation.",  
  "A woman receives a letter warning her not to trust her own memories.",  
  "A man finds his own obituary in the newspaper—dated tomorrow.",  
  "A child’s imaginary friend turns out to be a missing person from decades ago.",  

  // Fantasy & Magic  
  "A witch curses you: every lie you tell becomes physically painful, but the truth could destroy you.",  
  "A library where books rewrite themselves based on who reads them.",  
  "You inherit a house where every mirror is a portal to a different era—but they’re all breaking.",  
  "A painter’s portraits come to life when no one is watching.",  
  "A town where shadows move independently of their owners.",  

  // Sci-Fi & Tech  
  "The first AI to pass the Turing Test refuses to speak unless asked the right question.",  
  "A brain implant lets you erase memories—but deleted ones start reappearing as hallucinations.",  
  "Scientists discover a planet where time flows backward, and they send a team to explore.",  
  "A social media app predicts your death date with eerie accuracy.",  
  "A robot designed for companionship becomes obsessed with a deceased owner.",  

  // Psychological & Surreal  
  "You wake up speaking a language you’ve never heard—and someone understands it.",  
  "A therapist secretly treats supernatural beings, pretending they’re human patients.",  
  "A man realizes his deja vu is actually memory leaks from a past life.",  
  "A woman finds a door in her home that only appears when she’s not looking directly at it.",  
  "Every year on your birthday, you receive a letter from your future self—but this year, it’s blank.",  

  // Relationships & Dialogue  
  "Two people argue, only to realize they’re both lying about the same thing.",  
  "A couple finds a notebook where their future arguments are already written.",  
  "A person meets their soulmate—but they’re both already married to other people.",  
  "A dying confession reveals two lifelong friends were actually strangers who swapped identities.",  
  "A dating app matches users with their worst enemy instead of their perfect partner.",  

  // Dark & Twisted  
  "A funeral guest realizes the deceased is whispering to them—and no one else hears it.",  
  "A town’s children all draw the same monstrous figure in their sleep.",  
  "A serial killer’s victims start appearing in their dreams, demanding a proper burial.",  
  "A man plants a tree in his backyard—it grows into a perfect replica of his dead wife.",  
  "A doctor discovers all his patients share the same recurring nightmare—about him.",  

  // Humor & Absurdity  
  "A man wins the lottery, but the universe keeps preventing him from claiming it.",  
  "A lawyer defends a ghost in court for ‘wrongful death.’",  
  "A weather forecaster predicts the future with 100% accuracy—but only about trivial things.",  
  "A chef’s food is so delicious, people who eat it forget their own names.",  
  "A man tries to quit his job, but his boss is a literal demon who owns his soul.",  

  // Nature & Animals  
  "A gardener’s plants grow in the shapes of their unspoken thoughts.",  
  "A biologist discovers crows hold funerals for humans.",  
  "A forest vanishes overnight, leaving only a single, impossible tree behind.",  
  "A fisherman catches a fish that speaks in riddles—and warns him of a coming storm.",  
  "All the dogs in a neighborhood lead their owners to the same buried object.",  

  // Open-Ended & Experimental  
  "Write a story where the narrator slowly realizes they’re the villain.",  
  "Describe a world where art is the only form of currency.",  
  "A letter arrives with no sender, simply saying: ‘You know what you did.’",  
  "A character lives the same day twice—once as a comedy, once as a tragedy.",  
  "A poem written from the perspective of the last light in the universe."  


        ],
        art: [
            "Draw a futuristic city where nature has reclaimed most of the structures.",
            "Create a portrait of a person made entirely of their favorite things.",
            "Illustrate a scene where the laws of physics don't apply in one specific way.",
            "Design a creature that lives in an environment with extreme conditions.",
            "Paint a landscape using only shades of one color plus black and white.",

  // Visual Arts
  "A painter discovers their portraits alter the subjects' real-life personalities.",
  "A museum's newest exhibit features blank canvases—yet visitors claim to see masterpieces.",
  "Tattoos come alive at night, whispering secrets to their wearers.",
  "An art restorer finds a hidden painting beneath a Renaissance masterpiece... depicting the modern world.",
  "A colorblind artist suddenly starts painting in impossible hues no one has ever seen.",

  // Sculpture & Installation
  "A sculptor's clay never dries—and their creations keep evolving on their own.",
  "A gallery installs a mirror that shows viewers as their idealized selves... with disturbing consequences.",
  "Statues in a city park switch places overnight, and no one knows why.",
  "An artist builds a door that only opens for those who truly regret something.",
  "A child's stick-figure drawings start appearing in real life, exactly as drawn.",

  // Performance Arts
  "A ballerina dances so beautifully, audiences forget their memories while watching.",
  "An actor realizes every role they play dies in real life within a year.",
  "A mime's invisible walls become real during their performances.",
  "A comedian's jokes start coming true, but only the punchlines.",
  "An opera singer's high C shatters glass... and occasionally, reality.",

  // Music & Sound
  "A composer writes a symphony that replays listeners' happiest memories—or their worst.",
  "A vinyl record plays a song that doesn't exist... yet.",
  "A musician's instrument plays itself when no one is watching.",
  "An ancient lullaby, when sung backwards, wakes something terrible.",
  "A pianist discovers their grand piano has 89 keys instead of 88.",

  // Writing & Poetry
  "A poet's words physically manifest as they're written (metaphors become real).",
  "A library book tells a different story to every reader—including their futures.",
  "An author's fictional characters start appearing in town, insisting they're real.",
  "A pen that writes only painful truths... but in someone else's handwriting.",
  "A typewriter that finishes stories on its own—with alarming accuracy.",

  // Digital & Experimental
  "An AI-generated painting predicts disasters before they happen.",
  "A VR artist gets trapped in their own digital creation.",
  "A photographer's camera captures moments 5 minutes before they occur.",
  "An Instagram filter that shows your face as different people see it.",
  "A video game where the NPCs are all based on real people—without their consent.",

  // Art & Magic
  "An art supply store sells cursed brushes: whatever you paint becomes real, but twisted.",
  "A gallery's 'abstract' section is actually windows into other dimensions.",
  "An artist's sketchbook fills itself with portraits of people they'll meet tomorrow.",
  "A mural changes to reflect the collective mood of the neighborhood.",
  "An origami crane unfolds itself every night, no matter how many times it's refolded.",

  // Dark Arts
  "An art critic who can see the 'true form' of paintings—most are screaming.",
  "A portrait ages while its subject stays forever young.",
  "An art thief steals paintings only to find the frames now contain their own future.",
  "A performance artist swallows live paint... and starts vomiting masterpieces.",
  "A gallery intern realizes the 'sculptures' in storage are petrified people.",

  // Whimsical & Surreal
  "A child's crayon drawings keep appearing on their bedroom wall—but they swear they didn't draw them.",
  "An art teacher gives students invisible ink—only the untalented can see what it creates.",
  "A street artist's graffiti comes alive at midnight and roams the city.",
  "An art contest where the prize is having your creativity permanently removed.",
  "A museum guard who can step into any painting... but can't control which one.",

  // Meta & Existential
  "An artist realizes they're just a character in someone else's novel.",
  "A writer discovers their life is following the plot of their abandoned first draft.",
  "A painter's self-portrait winks at them—and it's not the first time.",
  "An art historian finds their own face in a 500-year-old fresco.",
  "The Mona Lisa finally speaks... and she's furious.",
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
        
        promptDisplay.innerHTML = `<p>${selectedPrompt}</p>`;
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