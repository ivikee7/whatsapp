/**
 * ============================================================================
 * WHATSAPP WEB AUTOMATION ENGINE (2026 WORKING FIX)
 * ============================================================================
 * 
 * ⚙️ CONFIGURATION SETTINGS
 * Change these values inside this block before running startWhatsAppBot()
 */
window.automationConfig = {
    keepRunning: false,
    delayBetweenMessages: 2000, // Cooldown delay in milliseconds (2000ms = 2 seconds)
    messageText: "Sorry!"        // The text word or phrase you want to loop send
};

/**
 * 🚀 START FUNCTION
 * This initiates the loop. It continuously looks for the active chat field,
 * types the text payload, and triggers the isolated send button layer.
 */
async function startWhatsAppBot() {
    window.automationConfig.keepRunning = true;
    console.log("🚀 Custom Engine Started! Click inside your target chat window.");

    while (window.automationConfig.keepRunning) {
        // Find WhatsApp Web's specific text layer container node
        const textInput = document.querySelector('div[contenteditable="true"][data-tab="10"]') || 
                          document.querySelector('footer div[contenteditable="true"]');
        
        if (!textInput) {
            console.warn("⚠️ Waiting for active chat window... Retrying in 2 seconds.");
            await new Promise(resolve => setTimeout(resolve, 2000));
            continue;
        }

        // 1. Clear out any previous text fragments, focus element, and type cleanly
        textInput.focus();
        document.execCommand('selectAll', false, null);
        document.execCommand('insertText', false, window.automationConfig.messageText);

        // 2. Force update text properties directly so WhatsApp registers text exists
        textInput.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));

        // 3. Send message without touching the adjacent attachment paperclip button
        await new Promise((resolve) => {
            setTimeout(() => {
                // Target SPECIFICALLY the send button by looking for its icon or unique attribute
                const sendBtn = document.querySelector('span[data-icon="send"]')?.closest('button') || 
                                document.querySelector('button[aria-label="Send message"]') ||
                                document.querySelector('button[data-testid="compose-btn-send"]');

                if (sendBtn) {
                    sendBtn.removeAttribute('disabled');
                    sendBtn.click();
                    console.log(`✉️ Message dispatched via button: "${window.automationConfig.messageText}"`);
                } else {
                    // Fallback to Enter key simulation if the button is blocked/hidden
                    console.log("Button not found via layout. Using keyboard injection fallback...");
                    const enterEventOptions = { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true };
                    textInput.dispatchEvent(new KeyboardEvent('keydown', enterEventOptions));
                }
                resolve();
            }, 250); 
        });

        // Loop pause interval buffer step
        await new Promise(resolve => setTimeout(resolve, window.automationConfig.delayBetweenMessages));
    }
    
    console.log("🛑 Automation loop stopped safely.");
}

/**
 * 🛑 STOP FUNCTION
 * This kills the active while-loop configuration flag and clears out any 
 * remaining micro-timeouts instantly to safely return control back to you.
 */
function stopWhatsAppBot() {
    window.automationConfig.keepRunning = false;
    for (let i = 1; i < 10000; i++) { window.clearInterval(i); window.clearTimeout(i); }
    console.log("🛑 System Engine Terminated.");
}

// ============================================================================
// 📖 PRINT USER INSTRUCTIONS AUTOMATICALLY TO CONSOLE LOGS
// ============================================================================
console.clear();
console.log(
    `%c✅ Fixed Custom Script Engine Injected Successfully!`, 
    "color: #25D366; font-size: 14px; font-weight: bold; font-family: sans-serif;"
);
console.log(
    `%c------------------------------------------------------------\n` +
    `📖 HOW TO USE THIS SCRIPT:\n\n` +
    `1️⃣ STEP 1: Click into the chat window of the contact you want to message.\n` +
    `2️⃣ STEP 2: To START sending "${window.automationConfig.messageText}", type this command below and press Enter:\n` +
    `   └👉 startWhatsAppBot()\n\n` +
    `3️⃣ STEP 3: To STOP the loop at any time, type this command below and press Enter:\n` +
    `   └👉 stopWhatsAppBot()\n\n` +
    `💡 HOW TO CUSTOMIZE SCRIPT VALUES ON THE FLY:\n` +
    `• To change the text:  automationConfig.messageText = "Your new text here";\n` +
    `• To change the speed: automationConfig.delayBetweenMessages = 1000; (1 second delay)\n` +
    `------------------------------------------------------------`,
    "color: #ffffff; font-family: monospace; font-size: 11px; background-color: #111; padding: 10px; border-radius: 5px;"
);
