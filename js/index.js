const selectFont = document.querySelector('.select-font');
const fontSize = document.querySelector('.font-size');
const textColor = document.querySelector('.text-color');
const bgColor = document.querySelector('.bg-color');
const textBorder = document.querySelector('.text-border');
const btnUnderline = document.querySelector('.btn-underline');
const btnItalic = document.querySelector('.btn-italic');
const btnBold = document.querySelector('.btn-bold');
const btnIncreaseLetterSpacing = document.querySelector('.btn-increase-letter-spacing');
const btnDecreaseLetterSpacing = document.querySelector('.btn-decrease-letter-spacing');
const btnIncreaseLineHeight = document.querySelector('.btn-increase-line-height');
const btnDecreaseLineHeight = document.querySelector('.btn-decrease-line-height');
const textCases = document.querySelector('.text-cases');
const textShadow = document.querySelector('.text-shadow');
const textInput = document.querySelector('.text-input');
const codeContainer = document.querySelector('.code-container');
const codeText = document.querySelector('#code p');
const codeFont = document.querySelector('.code-font');
const codeFontSize = document.querySelector('.code-font-size');
const codeColor = document.querySelector('.code-color');
const codeBackgroundColor = document.querySelector('.code-background-color');
const codeTextBorder = document.querySelector('.code-text-border');
const codeUnderline = document.querySelector('.code-underline');
const codeItalic = document.querySelector('.code-italic');
const codeBold = document.querySelector('.code-bold');
const codeLetterSpacing = document.querySelector('.code-letter-spacing');
const codeLineHeight = document.querySelector('.code-line-height');
const codeTextShadow = document.querySelector('.code-text-shadow');
const codeTextCase = document.querySelector('.code-text-case');
const copyCodeBtn = document.querySelector('.copy-code-btn');

let i;

textInput.style.letterSpacing = "0px"
textInput.style.lineHeight = "1"

// Font Family / font type / font

selectFont.addEventListener("change", () => {
    if(selectFont.value == "Default" || selectFont.value === "--Font--") {        
        textInput.style.fontFamily = "Times New Roman"
        codeFont.innerHTML = "font-family: Times New Roman;"
    } else {
        textInput.style.fontFamily = selectFont.value
        codeFont.innerHTML = "font-family: " + selectFont.value + ";"
    }
})

// Font Size

fontSize.addEventListener("change", () => {
    if(fontSize.value == "Default") {
        textInput.style.fontSize = "50px"
        codeFontSize.innerHTML = "font-size: 50px;"
    } else {
        textInput.style.fontSize = fontSize.value + "px"
        codeFontSize.innerHTML = "font-size: " + fontSize.value + "px;"
    }
})

// Text Color

textColor.addEventListener("change", () => {
    if(textColor.value == "Default" || textColor.value === "--Color--") {        
        textInput.style.color = "Black"
        codeColor.innerHTML = "color: Black;"
    } else {
        textInput.style.color = textColor.value
        codeColor.innerHTML = "color: " + textColor.value + ";"
    }
})

// Background-color

bgColor.addEventListener("change", () => {
    if(bgColor.value === "Default" || bgColor.value === "--Background Color--") {
        textInput.style.backgroundColor = "white"
        codeBackgroundColor.innerHTML = "background-color: white;"
    } else {
        textInput.style.backgroundColor = bgColor.value
        codeBackgroundColor.innerHTML = "background-color: " + bgColor.value + ";"
    }
})

// Text Border

textBorder.addEventListener("change", () => {
    let clr = textBorder.value
    if(textBorder.value === "Default" || textBorder.value === "--Text Border--") {
        textInput.style.textShadow = "none"
        codeTextBorder.innerHTML = "text-shadow: none;"
    } else {
        textInput.style.textShadow = "1px 1px 0 " + clr + ", -1px -1px 0 " + clr + ", 1px -1px 0 " + clr + ", -1px 1px 0 " + clr;
        codeTextBorder.innerHTML = "text-shadow: " + "1px 1px 0 " + clr + ", -1px -1px 0 " + clr + ", 1px -1px 0 " + clr + ", -1px 1px 0 " + clr + ";"
    }    
})

// Button Underline

btnUnderline.addEventListener("click", () => {
    textInput.classList.toggle("underline-text")
    btnUnderline.classList.toggle("active")

    if(btnUnderline.className == "btn btn-underline height-padding active") {
        codeUnderline.innerHTML = "text-decoration: underline;"
    } else {
        codeUnderline.innerHTML = "text-decoration: none;"
    }
})

// Button Italic

btnItalic.addEventListener("click", () => {
    textInput.classList.toggle("italicize-text")
    btnItalic.classList.toggle("active")

    if(btnItalic.className == "btn btn-italic height-padding active") {
        codeItalic.innerHTML = "font-style: italic;"
    } else {
        codeItalic.innerHTML = "font-style: none;"
    }
})

//Button Bold

btnBold.addEventListener("click", () => {
    textInput.classList.toggle("bold-text")
    btnBold.classList.toggle("active")

    if(btnBold.className == "btn btn-bold height-padding active") {
        codeBold.innerHTML = "font-weight: bold;"
    } else {
        codeBold.innerHTML = "font-weight: normal;"
    }
})

// Letter Spacing buttons

btnIncreaseLetterSpacing.addEventListener("click", () => {
    let textLetterSpacing = textInput.style.letterSpacing
    let newTextLetterSpacing = textLetterSpacing.substr(0, 2)
    let add = parseInt(newTextLetterSpacing) + 2;
    add += "px"
    textInput.style.letterSpacing = add

    codeLetterSpacing.innerHTML = "letter-spacing: " + textInput.style.letterSpacing + ";"
})

btnIncreaseLetterSpacing.addEventListener("mouseover", () => {
    btnIncreaseLetterSpacing.style.backgroundColor = "skyblue"
})

btnIncreaseLetterSpacing.addEventListener("mouseout", () => {
    btnIncreaseLetterSpacing.style.backgroundColor = "transparent"
})

btnDecreaseLetterSpacing.addEventListener("click", () => {
    let textLetterSpacing = textInput.style.letterSpacing
    let newTextLetterSpacing = textLetterSpacing.substr(0, 2)
    let del = parseInt(newTextLetterSpacing) - 2;
    del += "px"
    textInput.style.letterSpacing = del

    codeLetterSpacing.innerHTML = "letter-spacing: " + textInput.style.letterSpacing + ";"
})

btnDecreaseLetterSpacing.addEventListener("mouseover", () => {
    btnDecreaseLetterSpacing.style.backgroundColor = "skyblue"
})

btnDecreaseLetterSpacing.addEventListener("mouseout", () => {
    btnDecreaseLetterSpacing.style.backgroundColor = "transparent"
})

// Line Height buttons

btnIncreaseLineHeight.addEventListener("click", () => {
    let textLineHeight = textInput.style.lineHeight
    let newTextLineHeight = textLineHeight.substr(0, 2)
    let add = parseInt(newTextLineHeight) + 1
    textInput.style.lineHeight = add

    codeLineHeight.innerHTML = "line-height: " + textInput.style.lineHeight + ";"
})

btnIncreaseLineHeight.addEventListener("mouseover", () => {
    btnIncreaseLineHeight.style.backgroundColor = "skyblue"
})

btnIncreaseLineHeight.addEventListener("mouseout", () => {
    btnIncreaseLineHeight.style.backgroundColor = "transparent"
})

btnDecreaseLineHeight.addEventListener("click", () => {
    let textLineHeight = textInput.style.lineHeight
    let newTextLineHeight = textLineHeight.substr(0, 2)
    let del = parseInt(newTextLineHeight) - 1
    textInput.style.lineHeight = del

    codeLineHeight.innerHTML = "line-height: " + textInput.style.lineHeight + ";"
})

btnDecreaseLineHeight.addEventListener("mouseover", () => {
    btnDecreaseLineHeight.style.backgroundColor = "skyblue"
})

btnDecreaseLineHeight.addEventListener("mouseout", () => {
    btnDecreaseLineHeight.style.backgroundColor = "transparent"
})

// Uppercase, Lowercase and Capitalization functionality

textCases.addEventListener("click", () => {
    textInput.style.textTransform = textCases.value
    codeTextCase.innerHTML = "text-transform: " + textCases.value + ";"
})

// Text shadow

textShadow.addEventListener("change", () => {
    let shadowText = textInput.style.textShadow;
    if(textShadow.value === "None") {
        shadowText = "none"
        textInput.style.textShadow = shadowText
        codeTextShadow.innerHTML = "text-shadow: " + shadowText + ";"
    } else if(textShadow.value === "Shadow-1") {       
        shadowText = "2px 2px 5px gray"
        textInput.style.textShadow = shadowText
        codeTextShadow.innerHTML = "text-shadow: " + shadowText + ";"
    } else if(textShadow.value === "Shadow-2") {
        shadowText = "4px 4px 10px gray"
        textInput.style.textShadow = shadowText
        codeTextShadow.innerHTML = "text-shadow: " + shadowText + ";"
    } else if(textShadow.value === "Shadow-3") {
        shadowText = "0 4px 10px gray"
        textInput.style.textShadow = shadowText
        codeTextShadow.innerHTML = "text-shadow: " + shadowText + ";"
    } else if(textShadow.value === "Shadow-4") {       
        shadowText = "4px 4px 2px rgba(150, 150, 150, 1)"
        textInput.style.textShadow = shadowText
        codeTextShadow.innerHTML = "text-shadow: " + shadowText + ";"
    } else if(textShadow.value === "Shadow-5") {
        shadowText = "6px 3px 5px rgba(150, 150, 150, 1)"
        textInput.style.textShadow = shadowText
        codeTextShadow.innerHTML = "text-shadow: " + shadowText + ";"
    } else if(textShadow.value === "Shadow-6") {       
        shadowText = "2px 1px 13px rgba(150, 150, 150, 1)"
        textInput.style.textShadow = shadowText
        codeTextShadow.innerHTML = "text-shadow: " + shadowText + ";"
    } else if(textShadow.value === "Shadow-7") {
        shadowText = "8px 5px 5px rgba(150, 150, 150, 0.7)"
        textInput.style.textShadow = shadowText
        codeTextShadow.innerHTML = "text-shadow: " + shadowText + ";"
    } else if(textShadow.value === "Shadow-8") {       
        shadowText = "-5px -3px 3px rgba(150, 150, 150, 0.7)"
        textInput.style.textShadow = shadowText
        codeTextShadow.innerHTML = "text-shadow: " + shadowText + ";"
    }
})

// Copy generated code

function copyCode(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
