import Tools from "./Tools.mjs"

export default Vector;

class Vector {
  constructor(props) {
    if (Array.isArray(props)) {
      [this.x, this.y, this.z] = props;
    } else {
      let { x = 0, y = 0, z = 0, a, r } = props;
      if (a) {
        r ??= 1;
        this.x = r * Math.cos(a);
        this.y = r * Math.sin(a);
        this.z = z;
      } else {
        this.x = x;
        this.y = y;
        this.z = z;
      }
    }
  }

  project(v) {
    const dotProduct = this.dot(v);
    const magSq = v.magSq;
    const scale = dotProduct / magSq;
    return new Vector({
      x: v.x * scale,
      y: v.y * scale,
      z: v.z * scale
    });
  }


  add(v) {
    let { x, y, z } = v;
    if (Array.isArray(v)) {
      [x, y, z] = v
    }
    this.x += x;
    this.y += y;
    this.z += z;
    return this;
  }

  clampToZero(epsilon = 1e-10) {
    if (Math.abs(this.x) < epsilon) {
      this.x = 0;
    }
    if (Math.abs(this.y) < epsilon) {
      this.y = 0;
    }
    if (Math.abs(this.z) < epsilon) {
      this.z = 0;
    }
    return this;
  }

  angleWith(v) {
    let dotProduct = this.dot(v);
    let cosTheta = dotProduct / (this.mag() * v.mag());
    return Math.acos(cosTheta);
  }

  static angleBetween(v1, v2) {
    return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()));
  }

  get toArray() {
    return [this.x, this.y, this.z];
  }

  get copy() {
    return new Vector(this);
  }

  cross(v) {
    let { x, y, z } = v;
    if (Array.isArray(v)) {
      [x, y, z] = v
    }
    return new Vector({
      x: this.y * z - this.z * y,
      y: this.z * x - this.x * z,
      z: this.x * y - this.y * x
    });
  }

  dist(v) {
    let { x, y, z } = v;
    if (Array.isArray(v)) {
      [x, y, z] = v
    }
    return Math.sqrt(
      Math.pow(this.x - x, 2) +
      Math.pow(this.y - y, 2) +
      Math.pow(this.z - z, 2)
    );
  }

  div(v) {
    if (typeof v === "number") {
      const n = v;
      this.x /= n;
      this.y /= n;
      this.z /= n;
    } else {
      let { x = 1, y = 1, z = 1 } = v;
      if (Array.isArray(v)) {
        [x, y, z] = v
      }
      this.x /= x;
      this.y /= y;
      this.z /= z;
    }
    return this;
  }

  dot(v) {
    let { x, y, z } = v;
    if (Array.isArray(v)) {
      [x, y, z] = v
    }
    return this.x * x + this.y * y + this.z * z;
  }

  equals(v) {
    let { x, y, z } = v;
    if (Array.isArray(v)) {
      [x, y, z] = v
    }
    return this.x === x && this.y === y && this.z === z;
  }

  angle() {
    return Math.atan2(this.y, this.x);
  }

  slerp(v, amt) {
    if (!(v instanceof Vector)) {
      v = new Vector(v);
    }
    const angle = Vector.angleBetween(this, v);
    const sinTotal = Math.sin(angle);
    const ratioA = Math.sin((1 - amt) * angle) / sinTotal;
    const ratioB = Math.sin(amt * angle) / sinTotal;
    this.x = this.x * ratioA + v.x * ratioB;
    this.y = this.y * ratioA + v.y * ratioB;
    this.z = this.z * ratioA + v.z * ratioB;
    return this;
  }

  static lerpLineal(v1, v2, t) {
    if (!(v1 instanceof Vector)) {
      v1 = new Vector(v1);
    }
    if (!(v2 instanceof Vector)) {
      v2 = new Vector(v2);
    }
    const x = Tools.lerp(v1.x, v2.x, t);
    const y = Tools.lerp(v1.y, v2.y, t);
    const z = Tools.lerp(v1.z, v2.z, t);
    return new Vector({ x, y, z });
  }

  static lerpRadial(v1, v2, t) {
    if (!(v1 instanceof Vector)) {
      v1 = new Vector(v1);
    }
    if (!(v2 instanceof Vector)) {
      v2 = new Vector(v2);
    }
    let r = Tools.lerp(v1.mag(), v2.mag(), t);
    let a = Tools.lerp(v1.angle(), v2.angle(), t);
    return new Vector({ r, a });
  }

  lerp(v, t) {
    let { x, y, z } = v;
    if (Array.isArray(v)) {
      [x, y, z] = v
    }
    this.x = Tools.lerp(this.x, x, t);
    this.y = Tools.lerp(this.y, y, t);
    this.z = Tools.lerp(this.z, z, t);
    return this;
  }

  limit(max) {
    if (this.mag() > max) {
      this.normalize();
      this.mult(max);
    }
    return this;
  }

  get mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  get magSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  mult(v) {
    if (typeof v === "number") {
      const n = v
      this.x *= n;
      this.y *= n;
      this.z *= n;
    } else {
      const { x = 1, y = 1, z = 1 } = v;
      if (Array.isArray(v)) {
        [x, y, z] = v
      }
      this.x *= x;
      this.y *= y;
      this.z *= z;
    }
    return this;
  }

  normalize() {
    const m = this.mag();
    if (m !== 0) {
      this.div(m)
    }
    return this;
  }

  reflect(surfaceNormal) {
    if (!(surfaceNormal instanceof Vector)) {
      surfaceNormal = new Vector(surfaceNormal);
    }
    const d = this.dot(surfaceNormal) * 2;
    this.x -= d * surfaceNormal.x;
    this.y -= d * surfaceNormal.y;
    this.z -= d * surfaceNormal.z;
    return this;
  }

  rotate(angle) {
    const cosTheta = Math.cos(angle);
    const sinTheta = Math.sin(angle);
    this.x = this.x * cosTheta - this.y * sinTheta;
    this.y = this.x * sinTheta + this.y * cosTheta;
    return this;
  }

  // Sets the vector's components
  set(v) {
    let { x, y, z, a, r } = v;
    if (Array.isArray(v)) {
      [x, y, z] = v
    }
    if (x) {
      this.x = x;
    }
    if (y) {
      this.y = y;
    }
    if (z) {
      this.z = z;
    }
    if (a) {
      return this.setAngle(a);
    }
    if (r) {
      return this.setMag(r);
    }
    return this;
  }

  setAngle(angle) {
    const mag = this.mag();
    this.x = Math.cos(angle) * mag;
    this.y = Math.sin(angle) * mag;
    return this;
  }

  setMag(mag) {
    this.normalize().mult(mag);
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  toString() {
    return `Vector(${this.x}, ${this.y}, ${this.z})`;
  }

  static random2D() {
    return new Vector(1, 0, 0).setAngle(2 * Math.PI * Math.random());
  }

  static random3D() {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    return new Vector({
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi)
    });
  }
}
