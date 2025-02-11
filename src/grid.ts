
// creating Grid as a singleton
export class Grid {

  private static instance: Grid | null;
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  static getInstance(width: number, height: number): Grid {
    if (!Grid.instance) {
      Grid.instance = new Grid(width, height);
    }
    return Grid.instance;
  }

  isLost(position: {x: number, y: number}): boolean {
    return position.x > this.width || position.y > this.height || position.x < 0 || position.y < 0;
  }

  static resetInstance(): void {
    Grid.instance = null;
  }
}
