import { delayMs } from "../util";

class Exam3Solve {
  count: number;
  speed: number;
  sinDegree: number;
  cosDegree: number;
  screen: string[];
  width: number = 40;
  height: number = 20;
  dx: number = Math.floor(this.width / 2);
  dy: number = Math.floor(this.height / 2);

  private init() {
    this.count = 0;
    this.speed = 10;
    this.sinDegree = 0.0;
    this.cosDegree = 0.0;
    this.screen = [];
    for (let y = 0; y < this.height; ++y) {
      for (let x = 0; x < this.width; ++x) {
        this.screen.push("0");
      }
    }
  }

  private clearScreen(c: string = "0") {
    for (let i = 0; i < this.width * this.height; ++i) {
      this.screen[i] = c;
    }
  }

  private posToIndex(x: number, y: number) {
    x = Math.min(this.width - 1, Math.max(0, x));
    y = Math.min(this.height - 1, Math.max(0, y));

    return y * this.width + x;
  }

  private printAt(x: number, y: number, c: string) {
    try {
      c = c[0];
      this.screen[this.posToIndex(x, y)] = c;
    } catch (error) {}
  }

  private printObject(x: number, y: number, c: string) {
    this.printAt(x, y, c);
    {
      this.printAt(x, y - 1, c);
      this.printAt(x, y + 1, c);
      this.printAt(x - 1, y, c);
      this.printAt(x + 1, y, c);
    }
  }

  private screenToString(): string {
    let buffer = "";
    for (let y = 0; y < this.height; ++y) {
      for (let x = 0; x < this.width; ++x) {
        buffer += this.screen[x + y * this.width];
      }

      buffer += "\n";
    }
    return buffer;
  }

  private renderFrame(deltaMs: number) {
    this.clearScreen("_");

    const fps = Math.floor(1000.0 / deltaMs);
    const deltaSec = deltaMs / 1000.0;
    const deg2rad = Math.PI / 180;

    this.sinDegree = (this.sinDegree + 360.0 * deltaSec) % 360;
    const sin = this.sinDegree * deg2rad;

    this.cosDegree = (this.cosDegree + 320.0 * deltaSec * 0.3) % 360;
    const cos = this.cosDegree * deg2rad;

    let offsetX = Math.cos(sin) * (1 + Math.cos(cos)) * 5;
    let offsetY = Math.sin(sin) * (1 + Math.cos(cos)) * 5;

    let tx = this.dx + Math.round(offsetX);
    let ty = this.dy + Math.round(offsetY);

    this.printObject(tx, ty, "#");

    console.clear();
    console.log(
      fps + "fps" + "(" + tx + ", " + ty + ")" + "\n" + this.screenToString()
    );
  }

  async solve(fps: number) {
    const fpsMs = 1000.0 / fps;
    this.init();

    while (true) {
      this.renderFrame(fpsMs);
      await delayMs(fpsMs);
    }
  }
}

(new Exam3Solve()).solve(60);