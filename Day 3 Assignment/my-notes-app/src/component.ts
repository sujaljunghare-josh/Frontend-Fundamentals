export abstract class Component<S = any, P = any> {
    protected state: S;
    protected props: P;
    protected element: HTMLElement;
  
    constructor(containerId: string, props: P, initialState: S) {
      this.element = document.getElementById(containerId)!;
      this.props = props;
      this.state = initialState;
    }
  
    protected setState(newState: Partial<S>) {
      this.state = { ...this.state, ...newState };
      this.render();
    }
  
    abstract render(): void;
  }