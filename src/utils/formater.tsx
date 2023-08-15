// const FLOAT_REGEX = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/

export class Formatter {
  private formats: ((val: string) => string)[] = [];

  public format(value: string): string {
    return this.formats.reduce((a, b) => b(a), value);
  }

  public number() {
    this.formats.push((val: string) => val.replace(/\D/g, ""));
    return this;
  }

  public float() {
    this.formats.push((val: string) =>
      val.replace(/[^\d,-\s]/g, "").replace(/(,[^,]*),/g, "$1")
    );
    return this;
  }
}

const formatter = () => new Formatter();

export default formatter;
