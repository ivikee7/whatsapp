# WhatsApp Web Automation Bot

A lightweight, robust browser console automation script designed to safely loop and send custom messages on WhatsApp Web without triggering element click blockages or opening attachment menus.

## ✨ Features
- **Modern Selector Fix**: Dynamically identifies the updated 2026 WhatsApp Web chat input wrapper.
- **Anti-Paperclip Safe Protection**: Bypasses adjacent attachment rows explicitly to avoid accidentally popping open file selection dialogue windows.
- **Fail-safe Dispatch Actions**: Emulates native mouse down/up sequences while utilizing a fallback Enter key keyboard stroke generator if button clicks are restricted by page state configurations.
- **Real-time Control Panel**: Includes human-readable diagnostic instructions and runtime functions logged directly to your browser's DevTools console menu interface.

## 📖 Installation & Usage

### Step 1: Open WhatsApp Web & Choose Chat
1. Launch your browser and navigate to [WhatsApp Web](https://web.whatsapp.com).
2. Scan the QR code to authenticate if you aren't logged in.
3. Click directly on the contact or group window profile you wish to message.

### Step 2: Open the DevTools Console
- Press `F12` or use the keyboard shortcut `Ctrl + Shift + I` (`Cmd + Option + I` on macOS).
- Click on the **Console** tab panel at the top.

### Step 3: Inject the Automation Code
Copy the full contents of your JavaScript engine file, paste it directly into the blinking cursor path at the bottom of the console line, and press **Enter**.

> 💡 **Note**: If your browser layout warns you about pasting code, simply type out the authorization phrase `allow pasting` into the prompt field line first and hit **Enter** to remove restrictions.

### Step 4: Control the Script Execution
Now that the background functions are fully loaded into active page memory, control the automated engine loop with these terminal instructions:

- **To START the loop automation:**
  ```javascript
  startWhatsAppBot();
  ```
- **To STOP the loop execution cleanly at any time:**
  ```javascript
  stopWhatsAppBot();
  ```

## ⚙️ Custom Configurations
You can adjust message parameters directly inside your running console before triggering the start method:

- **Change message content string:**
  ```javascript
  automationConfig.messageText = "Your custom text here";
  ```
- **Change loop speed velocity (in milliseconds):**
  ```javascript
  automationConfig.delayBetweenMessages = 3000; // Sets delay to 3 seconds
  ```

---
*Disclaimer: This project is meant purely for educational testing purposes. Excessive text iteration intervals can trigger platform anti-spam filters, possibly leading to account suspension flags.*
