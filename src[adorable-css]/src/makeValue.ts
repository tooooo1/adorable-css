export const makeNumber = (num:number) => num.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0"

export const cssvar = (value:string) => String(value).startsWith("--") ? `var(${value})` : value

export const px = (value:string|number) => {
  if (value === 0 || value === "0") return 0
  if (String(value).startsWith("--")) return cssvar("" + value)
  const [n, m] = String(value).split("/")
  if (+n > 0 && +m > 0) return makeNumber(+n / +m * 100) + "%"
  return +value === +value ? value + "px" : value
}

export const percentToEm = (value:string) => {
  if (value.endsWith("%")) return +(value.slice(0, -1)) / 100 + "em"
  return value
}

export const makeFont = (value:string) => (value || "").split("/").map((value, index) => {
  if (value === "-") return
  if (String(value).startsWith("--")) return `var(${value})`

  // @TODO: line-height값이 3이하면 1.5 로 표기

  switch (index) {
    case 0: {return `font-size:${px(value)}`}
    case 1: {return `line-height:${+value < 4 ? makeNumber(+value) : px(value)}`}
    case 2: {return `letter-spacing:${px(percentToEm(value))}`}
  }
}).filter(Boolean).join(";")


export const makeHEX = (value:string) => {
  const [rgb, a] = value.split(".")
  if (a && rgb.length === 4) return "rgba(" + [...rgb.slice(1)].map(value => parseInt(value + value, 16)).join(",") + ",." + a + ")"
  if (a) return "rgba(" + [rgb.slice(1, 3), rgb.slice(3, 5), rgb.slice(5, 7)].map(value => parseInt(value, 16)).join(",") + ",." + a + ")"
  return value
}

export const makeHLS = (value:string) => {
  const [h, s, l, a] = value.split(",")
  return "hsl" + (a ? "a" : "") + "(" + [h, s, l, a].filter(Boolean).map(cssvar).join() + ")"
}

export const makeRGB = (value:string) => {
  const [r, g, b, a] = value.split(",")
  return "rgb" + (a ? "a" : "") + "(" + [r, g, b, a].filter(Boolean).map(cssvar).join() + ")"
}

export const makeColor = (value:string = "transparent") => {
  if (value === "-") return "transparent"
  if (value === "transparent") return "transparent"
  if (value.startsWith("--")) return `var(${value})`

  // HEX #ff0, #ff0f00, HEXa #ff0.4, #ff00aa.4
  if (value.charAt(0) === "#") return makeHEX(value)

  // HSL, HSLA (222,100%,50%)
  if (value.includes(",") && value.includes("%")) return makeHLS(value)

  // RGB, RGBA
  if (value.includes(",")) return makeRGB(value)

  return value
}

// @TODO:
export const makeBorder = (value:string) => {
  if (value === "none") return "none"
  if (value === "0") return "none"
  return `1px solid ${makeColor(value)}`
}

export const makeValues = (value:string, project = (a:string):string|number => a) => {
  if (String(value).startsWith("--")) return `var(${value})`
  return value && value.split("/").map(project).join(" ")
}

export const makeCommaValues = (value:string, project = (a:string):string|number => a) => {
  if (String(value).startsWith("--")) return `var(${value})`
  return value && value.split(",").map(project).join(",")
}

export const makeSide = (value:string) => makeValues(value, px)

export const makeRatio = (value:string) => {
  const [w, h] = value.split(":")
  return (+w / +h * 100).toFixed(2) + "%"
}

export const makeHBox = (value = "") => {
  const values = value.split("+")

  const result = values.map(v => {
    switch (v) {
      case "top": {return "align-items: flex-start;"}
      case "bottom": {return "align-items: flex-end;"}
      case "fill": {return "align-items: stretch;"}
      case "stretch": {return "align-items: stretch;"}
      case "center": {return "justify-content: center;"}
      case "left": {return values.includes("reverse") ? "justify-content: flex-end;" : ""}
      case "right": {return !values.includes("reverse") ? "justify-content: flex-end;" : ""}
      case "reverse": {return "flex-direction: row-reverse;"}
    }
  })

  if (!values.includes("top") && !values.includes("bottom") && !values.includes("full")) {
    // @ts-ignore
    result.unshift("align-items: center;")
  }

  return result.join("")
}

export const makeVBox = (value = "") => {
  const values = value.split("+")

  const result = values.map(v => {
    switch (v) {
      case "left": {return "align-items: flex-start;"}
      case "center": {return "align-items: center;"}
      case "right": {return "align-items: flex-end;"}
      case "top": {return values.includes("reverse") ? "justify-content: flex-end;" : ""}
      case "bottom": {return !values.includes("reverse") ? "justify-content: flex-end;" : ""}
      case "reverse": {return "flex-direction: column-reverse;"}
    }
  })

  if (!values.includes("left") && !values.includes("center") && !values.includes("right")) {
    // @ts-ignore
    result.unshift("align-items: stretch;")
  }

  return result.join("")
}

export const makeTransition = (value:string) => {
  if (!value.includes("=")) return `all ${value}`
  return value.split("/").map(item => item.replace("=", " ")).join(",")
}