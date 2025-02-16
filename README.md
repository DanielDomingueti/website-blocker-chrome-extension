# Website Blocker Extension

A simple extension to block social media sites and help you stay focused on work. With this extension, you can easily block platforms like YouTube, Facebook, Instagram, Twitter, TikTok, and more.

## Features

- Automatically blocks predefined social media sites when accessed.
- Displays a full-screen block message saying "Get back to work :)".
- Helps you stay focused on what's important, without distractions.

## Technologies

- JavaScript
- HTML/CSS

## How It Works

This extension checks if the user is on one of the sites listed for blocking, and if so, it displays a full-screen overlay covering the page content with a fun message to remind them to get back to work.

## Installation

1. Clone or download this repository to your computer.
   
   ```bash
   git clone https://github.com/your-username/website-blocker-chrome-extension.git
   
2. Open Chrome or your preferred browser and go to chrome://extensions/.

3. Enable "Developer mode" in the top right corner.

4. Click "Load unpacked" and select the folder where you downloaded or cloned the repository.

5. The extension will be installed and will start blocking the configured sites automatically.

## Customization

If you want to add or remove sites from the block list, simply edit the websitesToBlock variable in the extension's code. The list is located in script.js.
```
const websitesToBlock = [
    "youtube.com",
    "x.com",
    "facebook.com",
    "instagram.com",
    "tiktok.com",
];
```

## Contributing
Feel free to open an issue or a pull request if you find any problems or want to add new features. All feedback is welcome!
