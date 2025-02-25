import Rectangle from './rect.mjs';

export default Circle;

class Circle {
    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
    }

    get copy() {
        return new Circle(this.x, this.y, this.d);
    }

    get toRect() {
        return new Rectangle(this.x - this.r, this.y - this.r, this.d, this.d);
    }

    collideRect(rectangulo) {
        if (!rectangulo.collideRect(this.toRect)) {
            return false;
        }
        let vertices = [
            { x: this.x, y: this.y + this.r },
            { x: this.x, y: this.y - this.r },
            { x: this.x + this.r, y: this.y },
            { x: this.x - this.r, y: this.y },
        ]
        for (let i in vertices) {
            if (rectangulo.collidePoint(vertices[i])) {
                return true;
            }
        }
        vertices = rectangulo.vertices;
        for (let i in vertices) {
            if (this.collidePoint(vertices[i])) {
                return true;
            }
        }
        return false;
    }

    collideCircle(circulo) {
        let d = this.distanceCenter(circulo.center);
        let a = this.r + circulo.r;
        return d < a;
    }

    isInside_circle(circulo) {
        let d = this.distanceCenter(circulo.center);
        let a = Math.abs(this.r - circulo.r);
        return d < a;
    }

    collidePoint(props) {
        let d;
        if (props instanceof Object) {
            d = this.distanceCenter(props);
        }
        return d < this.r;
    }

    move(x, y) {
        if (x instanceof Object) {
            y = x.y;
            x = x.x;
        }
        this.x = x;
        this.y = y;
    }

    distanceCenter(x, y) {
        if (x instanceof Object) {
            y = x.y;
            x = x.x;
        }
        return ((this.center.x - x) ** 2 + (this.center.y - y) ** 2) ** 0.5;
    }

    angleCenter(x, y) {
        if (x instanceof Object) {
            y = x.y;
            x = x.x;
        }
        return Math.atan2(y - this.center.y, x - this.center.x);
    }

    angleToBorder(a, dr = 0) {
        return {
            x: this.x + (this.r + dr) * Math.cos(a),
            y: this.y + (this.r + dr) * Math.sin(a),
        };
    }

    pointToBorder(x, y) {
        let a = this.angleCenter(x, y);
        return this.angleToBorder(a);
    }

    set center(centro) {
        this.x = centro.x;
        this.y = centro.y;
    }

    get center() {
        return { x: this.x, y: this.y };
    }

    set r(r) {
        this.d = 2 * r;
    }

    get r() {
        return this.d / 2;
    }
}