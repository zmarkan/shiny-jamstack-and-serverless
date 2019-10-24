+++
title = "Brave New World of Serverless"
outputs = ["Reveal"]
+++


### Brave New World of 
# Serverless

<img src="/images/code-talks.png" height="200" style="background: none; border: none !important; shadow: none;"></img> <svg xmlns="http://www.w3.org/2000/svg" viewBox="125 90 750 210" width="330" height="240"><g><path fill="#fff" d="M327.7 256.6V133.5c0-1.3 1-2.3 2.3-2.3h35.8c22.7 0 36.8 13.5 36.8 36.1s-16 37-37 37h-19.1c-.6 0-1.2.5-1.2 1.2v51.2c0 1.3-1 2.3-2.3 2.3h-13c-1.2 0-2.3-1.1-2.3-2.4zm38.2-67.4c12 0 18.8-10.2 18.8-21.8 0-12-6.2-21.1-18.8-21.1h-19.3c-.6 0-1.2.5-1.2 1.2V188c0 .6.5 1.2 1.2 1.2h19.3z"></path><path fill="#fff" d="M480.8 131.1h13c1.3 0 2.3 1 2.3 2.3v93c0 21.1-16.9 34-36.7 34-19.4 0-36.3-13-36.3-34v-93c0-1.3 1-2.3 2.3-2.3h12.8c1.3 0 2.3 1 2.3 2.3V226c0 11.5 8.6 18.8 18.8 18.8 10.2 0 19-7.3 19-18.8v-92.6c.2-1.2 1.2-2.3 2.5-2.3z"></path><path fill="#fff" d="M539.9 194.3c-12.4-8.5-20.7-18-20.7-32.3 0-20.5 16.9-32.3 36.1-32.3 18.1 0 34 10.3 34.9 36.3 0 1.3-1 2.5-2.3 2.5H576c-1.2 0-2.3-1-2.3-2.2-.8-14.1-9.1-20.9-19.5-20.9-10 0-17.5 6-17.5 15.6 0 8.3 4.9 12.8 17.7 22l17.9 13.2c12.4 9.2 19.4 17.5 19.4 30.6 0 21.2-17.1 33.8-37.2 33.8-19 0-34-10.6-35.6-36.6-.1-1.4 1-2.5 2.3-2.5h12.1c1.2 0 2.2 1 2.3 2.2 1.1 14.5 9.6 21.2 19.6 21.2 9.6 0 18.6-5.3 18.6-17.7 0-7.7-3.4-11.5-13.2-18.2l-20.7-14.7z"></path><path fill="#fff" d="M670.5 256.6v-53.8c0-.6-.5-1.2-1.2-1.2H634c-.6 0-1.2.5-1.2 1.2v53.8c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1-2.3-2.3V133.5c0-1.3 1-2.3 2.3-2.3h13c1.3 0 2.3 1 2.3 2.3v51.4c0 .6.5 1.2 1.2 1.2h35.3c.6 0 1.2-.5 1.2-1.2v-51.4c0-1.3 1-2.3 2.3-2.3h13c1.3 0 2.3 1 2.3 2.3v123.2c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1.1-2.3-2.4z"></path><path fill="#fff" d="M713 256.6V133.5c0-1.3 1-2.3 2.3-2.3h63.6c1.3 0 2.3 1 2.3 2.3v10.7c0 1.3-1 2.3-2.3 2.3h-47.1c-.6 0-1.2.5-1.2 1.2v37.7c0 .6.5 1.2 1.2 1.2h32.4c1.3 0 2.3 1 2.3 2.3v10.7c0 1.3-1 2.3-2.3 2.3h-32.4c-.6 0-1.2.5-1.2 1.2v39.2c0 .6.5 1.2 1.2 1.2h47.1c1.3 0 2.3 1.1 2.3 2.3v10.7c0 1.3-1.1 2.3-2.3 2.3h-63.6c-1.3.2-2.3-.9-2.3-2.2z"></path><path fill="#fff" d="M855.5 256.6l-19.2-53.5c-.2-.5-.6-.8-1.1-.8h-17.8c-.6 0-1.2.5-1.2 1.2v53.1c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1-2.3-2.3V133.5c0-1.3 1-2.3 2.3-2.3h35.6c21.8 0 36.8 14.1 36.8 35 0 13.9-7.2 25.5-20.4 32.3-.3.1-.4.4-.3.7l21.7 56.7c.6 1.5-.5 3.2-2.2 3.2h-13.5c-1.2-.1-2.6-1.1-3.1-2.5zm-20.4-68.9c10.5 0 19.9-7.5 19.9-20.7 0-11.8-7.5-20.7-19.9-20.7h-17.7c-.6 0-1.1.5-1.1 1.1v39c0 .6.5 1.2 1.2 1.2h17.6z"></path><path fill="#00DE72" d="M262.1 146.2v-13.1c0-.2-.1-.4-.3-.5l-65-37.5c-.2-.1-.4-.1-.6 0l-10.8 6.2c-.4.2-.4.8 0 1l63.8 36.8c.4.2.4.8 0 1l-13.6 7.9c-.2.1-.4.1-.6 0l-65-37.5c-.2-.1-.4-.1-.6 0l-10.8 6.2c-.4.2-.4.8 0 1l63.8 36.8c.4.2.4.8 0 1l-13.6 7.9c-.2.1-.4.1-.6 0l-65-37.5c-.2-.1-.4-.1-.6 0l-11.4 6.6c-.2.1-.3.3-.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-123c0-.5.5-.7.9-.5l13.6 7.9c.2.1.3.3.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-123c0-.5.5-.7.9-.5l13.6 7.9c.2.1.3.3.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-48c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.3.3-.5v-12.5c0-.5-.5-.7-.9-.5L197.4 232c-.4.2-.9-.1-.9-.5v-15.8c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.3.3-.5v-12.5c0-.5-.5-.7-.9-.5L197.4 201c-.4.2-.9-.1-.9-.5v-15.8c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.2.3-.5zm-65.6 24.4z"></path></g></svg>



---

### Brave New World Of 
# Serverless

Zan Markan

Developer Advocate at Pusher

---

{{< slide background-image="/images/01_hamburg.jpg" >}}

---

#### Not so long ago, and not too far away either... 

---

{{< slide background-image="/images/05_old_hamburg_2.jpg" >}}

---


{{< slide background-image="/images/04_old_hamburg.jpg" >}}

---

{{< slide background-image="/images/02_container.jpg" >}}

---

{{< slide background-image="/images/06_fulfilment.bmp" >}}

---

Cool story bruh, but what does it have to do with serverless?

---

## Shipping cargo 🚢📦 

_vs_ 

## shipping software 🐱‍💻

---

You _should_ be able to see some text moving as I speak below here... 👇

---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="125 90 750 210" width="330" height="120"><g><path fill="#fff" d="M327.7 256.6V133.5c0-1.3 1-2.3 2.3-2.3h35.8c22.7 0 36.8 13.5 36.8 36.1s-16 37-37 37h-19.1c-.6 0-1.2.5-1.2 1.2v51.2c0 1.3-1 2.3-2.3 2.3h-13c-1.2 0-2.3-1.1-2.3-2.4zm38.2-67.4c12 0 18.8-10.2 18.8-21.8 0-12-6.2-21.1-18.8-21.1h-19.3c-.6 0-1.2.5-1.2 1.2V188c0 .6.5 1.2 1.2 1.2h19.3z"></path><path fill="#fff" d="M480.8 131.1h13c1.3 0 2.3 1 2.3 2.3v93c0 21.1-16.9 34-36.7 34-19.4 0-36.3-13-36.3-34v-93c0-1.3 1-2.3 2.3-2.3h12.8c1.3 0 2.3 1 2.3 2.3V226c0 11.5 8.6 18.8 18.8 18.8 10.2 0 19-7.3 19-18.8v-92.6c.2-1.2 1.2-2.3 2.5-2.3z"></path><path fill="#fff" d="M539.9 194.3c-12.4-8.5-20.7-18-20.7-32.3 0-20.5 16.9-32.3 36.1-32.3 18.1 0 34 10.3 34.9 36.3 0 1.3-1 2.5-2.3 2.5H576c-1.2 0-2.3-1-2.3-2.2-.8-14.1-9.1-20.9-19.5-20.9-10 0-17.5 6-17.5 15.6 0 8.3 4.9 12.8 17.7 22l17.9 13.2c12.4 9.2 19.4 17.5 19.4 30.6 0 21.2-17.1 33.8-37.2 33.8-19 0-34-10.6-35.6-36.6-.1-1.4 1-2.5 2.3-2.5h12.1c1.2 0 2.2 1 2.3 2.2 1.1 14.5 9.6 21.2 19.6 21.2 9.6 0 18.6-5.3 18.6-17.7 0-7.7-3.4-11.5-13.2-18.2l-20.7-14.7z"></path><path fill="#fff" d="M670.5 256.6v-53.8c0-.6-.5-1.2-1.2-1.2H634c-.6 0-1.2.5-1.2 1.2v53.8c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1-2.3-2.3V133.5c0-1.3 1-2.3 2.3-2.3h13c1.3 0 2.3 1 2.3 2.3v51.4c0 .6.5 1.2 1.2 1.2h35.3c.6 0 1.2-.5 1.2-1.2v-51.4c0-1.3 1-2.3 2.3-2.3h13c1.3 0 2.3 1 2.3 2.3v123.2c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1.1-2.3-2.4z"></path><path fill="#fff" d="M713 256.6V133.5c0-1.3 1-2.3 2.3-2.3h63.6c1.3 0 2.3 1 2.3 2.3v10.7c0 1.3-1 2.3-2.3 2.3h-47.1c-.6 0-1.2.5-1.2 1.2v37.7c0 .6.5 1.2 1.2 1.2h32.4c1.3 0 2.3 1 2.3 2.3v10.7c0 1.3-1 2.3-2.3 2.3h-32.4c-.6 0-1.2.5-1.2 1.2v39.2c0 .6.5 1.2 1.2 1.2h47.1c1.3 0 2.3 1.1 2.3 2.3v10.7c0 1.3-1.1 2.3-2.3 2.3h-63.6c-1.3.2-2.3-.9-2.3-2.2z"></path><path fill="#fff" d="M855.5 256.6l-19.2-53.5c-.2-.5-.6-.8-1.1-.8h-17.8c-.6 0-1.2.5-1.2 1.2v53.1c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1-2.3-2.3V133.5c0-1.3 1-2.3 2.3-2.3h35.6c21.8 0 36.8 14.1 36.8 35 0 13.9-7.2 25.5-20.4 32.3-.3.1-.4.4-.3.7l21.7 56.7c.6 1.5-.5 3.2-2.2 3.2h-13.5c-1.2-.1-2.6-1.1-3.1-2.5zm-20.4-68.9c10.5 0 19.9-7.5 19.9-20.7 0-11.8-7.5-20.7-19.9-20.7h-17.7c-.6 0-1.1.5-1.1 1.1v39c0 .6.5 1.2 1.2 1.2h17.6z"></path><path fill="#00DE72" d="M262.1 146.2v-13.1c0-.2-.1-.4-.3-.5l-65-37.5c-.2-.1-.4-.1-.6 0l-10.8 6.2c-.4.2-.4.8 0 1l63.8 36.8c.4.2.4.8 0 1l-13.6 7.9c-.2.1-.4.1-.6 0l-65-37.5c-.2-.1-.4-.1-.6 0l-10.8 6.2c-.4.2-.4.8 0 1l63.8 36.8c.4.2.4.8 0 1l-13.6 7.9c-.2.1-.4.1-.6 0l-65-37.5c-.2-.1-.4-.1-.6 0l-11.4 6.6c-.2.1-.3.3-.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-123c0-.5.5-.7.9-.5l13.6 7.9c.2.1.3.3.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-123c0-.5.5-.7.9-.5l13.6 7.9c.2.1.3.3.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-48c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.3.3-.5v-12.5c0-.5-.5-.7-.9-.5L197.4 232c-.4.2-.9-.1-.9-.5v-15.8c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.3.3-.5v-12.5c0-.5-.5-.7-.9-.5L197.4 201c-.4.2-.9-.1-.9-.5v-15.8c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.2.3-.5zm-65.6 24.4z"></path></g></svg>

Realtime APIs to make delightful communication features

💬 🚨 📰 🗺️ 🛵 📈

[pusher.com](https://pusher.com)

---

serverless != λ

---

Serverless is:

- Using what's out there
- Autoscaling
- Quick to start
- Focusing on your business logic

---

### But...

What the naysayers are saying

---

# 🕵️‍♂️

Serverless has servers!

---

<img src="/images/one_free_internet.jpg"></img>

---

# 💸

It costs more than using your own EC2 instances!

---

# 🖨️

I can't run it on custom hardware!

---

# 🤖

I can't use it for machine learning!

---

# 💯

They are all correct.

---

# 🗽

## The new liberal computing

---

# 🎏

### Glitch 

---

<img src="/images/glitch_sample.png" height="500">

---

> "Serverless might be this generation's PHP".

Pawel Ledwon, CTO Pusher

---

Get started faster, discover the joy of programming and building things sooner

---

## building an
# Ecosystem 
## (of ecosystems)

# 🤝

---

<img src="/images/hook_emoji.png" height="100" style="background: none; border: none !important; shadow: none;"></img>

## webhooks

React to all the things!

---

<svg width="100" height="100" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C14.9707 1 19 5.02932 19 10C19 14.9707 14.9707 19 10 19C5.02932 19 1 14.9707 1 10C1 5.02932 5.02932 1 10 1Z" stroke="#2088FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 19C26.3137 19 29 21.6863 29 25C29 28.3137 26.3137 31 23 31C19.6863 31 17 28.3137 17 25C17 21.6863 19.6863 19 23 19Z" stroke="#2088FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 35C26.3137 35 29 37.6863 29 41C29 44.3137 26.3137 47 23 47C19.6863 47 17 44.3137 17 41C17 37.6863 19.6863 35 23 35Z" stroke="#2088FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41 35C44.3137 35 47 37.6863 47 41C47 44.3137 44.3137 47 41 47C37.6863 47 35 44.3137 35 41C35 37.6863 37.6863 35 41 35Z" stroke="#79B8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.0365 23.6069L21.9673 26.672L20.4766 25.1866" stroke="#2088FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41 19C44.3137 19 47 21.6863 47 25C47 28.3137 44.3137 31 41 31C37.6863 31 35 28.3137 35 25C35 21.6863 37.6863 19 41 19Z" stroke="#2088FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.0365 23.6069L39.9673 26.672L38.4766 25.1866" stroke="#2088FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 6.81201C7 6.02498 7.86709 5.54641 8.533 5.9659L13.6462 9.18692C14.2715 9.58082 14.2682 10.4935 13.6402 10.8829L8.52697 14.0534C7.8608 14.4664 7 13.9873 7 13.2035V6.81201Z" stroke="#2088FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 19V34C9 37.866 12.1772 41 16 41H17" stroke="#2088FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.949 26C17.5013 26 17.949 25.5523 17.949 25C17.949 24.4477 17.5013 24 16.949 24V26ZM8 19.0352C8 22.8817 11.1183 26 14.9648 26V24C12.2228 24 10 21.7772 10 19.0352H8ZM14.9648 26H16.949V24H14.9648V26Z" fill="#2088FF"/>
<path d="M29.0547 25H34.9993" stroke="#2088FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 40C21.5518 40 22 40.4482 22 41C22 41.5526 21.5518 42 21 42C20.4482 42 20 41.5526 20 41C20 40.4482 20.4482 40 21 40Z" fill="#79B8FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 40C25.5518 40 26 40.4482 26 41C26 41.5526 25.5518 42 25 42C24.4482 42 24 41.5526 24 41C24 40.4482 24.4482 40 25 40Z" fill="#79B8FF"/>
<path d="M34.0048 41.0069L32.9922 41.0399" stroke="#79B8FF" stroke-width="2" stroke-linecap="round"/>
</svg>

## GitHub actions 

Build pipelines

---

<img src="/images/netlify_logomark.png" height="100" width="100" style="background: none; border: none !important; shadow: none;"></img> 

## Netlify

Static sites, functions and hosting these slides!

---

<img src="/images/auth0-glyph.png" height="100" style="background: none; border: none !important; shadow: none;"> </img>

## Auth0

Identity as a service

---

<svg width="100" viewBox="0 0 113 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
    <title>Logotype - White</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="196.572434%" y1="228.815483%" x2="50%" y2="50%" id="linearGradient-1">
            <stop stop-color="#000000" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="White-Triangle" transform="translate(-294.000000, -150.000000)" fill="url(#linearGradient-1)">
            <polygon id="Logotype---White" points="350.5 150 407 250 294 250"></polygon>
        </g>
    </g>
</svg>

## Zeit

Serverless deployments & magic CLI tools ✨

---

<img src="/images/zeit_sample.png" height="600">

---

## <img src="/images/channels_icon.png" height="100" style="background: none; border: none !important; shadow: none;"> </img> & <img src="/images/chatkit_icon.png" height="100" style="background: none; border: none !important; shadow: none;"> </img>

## Pusher Channels & Chatkit

Realtime and Chat as a service

---

All these SaaS products let you focus on building what matters to you.

Let them.

---

# 💪

## The value of getting stuff done

---

# 🦖

It's evolution, baby! 

---

# 🐱‍🐉

Serverless is not going to "kill" computing. 

It's just a new paradigm, and one that is really convenient to use.

---

{{< slide background-image="/images/03_thanos.jpg" >}}

## Serverless is... inevitable

---

### Addendum 
## how the captions work 💭

--- 

**Google Cloud** Speech 2 Text - 🎙💬🤖

**Pusher Channels** ✨☁

Reveal.JS prezo on **Netlify** ⚡💻

---

# 💡
## How novel is that?

---

Not at all 🤦‍

PowerPoint had it for ages 😬

---

# Future? 🔮

---

{{< slide background-image="/images/walmart_fridge.png">}}

---

# _Fin_

Made with ❤️ by [@zmarkan](https://twitter.com/zmarkan)

<small> zan@pusher.com // pusher.com </small><br/>
<small> @zmarkan // @pusher </small>

---

# Resources

Presentation URL: [brave-new-world-of-serverless.netlify.com](https://brave-new-world-of-serverless.netlify.com)

Presentation code: [github.com/zmarkan/brave_new_world_of_serverless](github.com/zmarkan/brave_new_world_of_serverless) 

Speech to Text code: [github.com/zmarkan/talk_transcriptor](https://github.com/zmarkan/talk_transcriptor)

---
# Problems 😱

My engerlisch 😂

(and/or technology)

---
