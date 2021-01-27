const PI2 = Math.PI * 2;

const COLORS = [
    '#4b45ab',
    '#554fb8',
    '#605ac7',
    '#2a91a8',
    '#0e9ab2',
    '#32a5bf',
    '#81b144',
    '#85b944',
    '#8fc549',
    '#e0af27',
    '#eeba2a',
    '#fec72e',
    '#bf342d',
    '#ca3931',
    '#d7423a',
]

export class Polygon{
    constructor(x, y, radius, radius2, sides){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.radius2 = radius2;
        this.sides = sides;
        this.rotate = 0;

    }

    animate(ctx, moveX){
        const angle =  PI2 / this.sides;
        const angle2 = PI2 / 4;

        this.rotate -= moveX * 0.008;

        for(let j =0; j < 4; j++){
            ctx.save();

            switch(j){
                case 0:
                    break;
                case 1:
                    ctx.translate(0, this.y * 2);
                    break;
                case 2:
                    ctx.translate(this.x * 2, this.y * 2);
                    break;
                case 3:
                    ctx.translate(this.x * 2, 0);
                    break;

            }
            


            ctx.rotate(this.rotate);
            
           // ctx.beginPath();
            
            for(let i = 0; i < this.sides; i++){
                const x = this.radius * Math.cos(angle * i);
                const y = this.radius * Math.sin(angle * i);

             //   (i == 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);

                ctx.fillStyle = COLORS[i];

                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(angle * i + angle2 / 2);
                ctx.beginPath();

                for(let k = 0; k < 4; k++){
                    const x2 = this.radius2 * Math.cos(angle2 * k);
                    const y2 = this.radius2 * Math.sin(angle2 * k);
 
                    (k == 0) ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);     
                    }
                ctx.fill();
                ctx.closePath();

                ctx.restore();

            //    ctx.beginPath();
            //    ctx.arc(x, y, 50, 0, PI2);
            //    ctx.fill();
            //    ctx.closePath();

            }

            //ctx.fill();
           // ctx.closePath();
            ctx.restore();
        }

        

        
        
    }


}