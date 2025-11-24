import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  unit?: string;
  featured?: boolean;
}

const ProductCard = ({ name, description,  image, unit = "per unit", featured }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-strong transition-all duration-300 h-full flex flex-col">
      <div className="aspect-square overflow-hidden relative">
        {featured && (
          <Badge className="absolute top-2 right-2 z-10 bg-accent text-accent-foreground">
            Popular
          </Badge>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4 flex-1">
        <h3 className="font-bold text-lg mb-2 text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-baseline gap-2">
          {/* <span className="text-2xl font-bold text-accent">{price}</span> */}
          {/* <span className="text-sm text-muted-foreground">{unit}</span> */}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link to="/quote">Get Quote</Link>
        </Button>
        <Button asChild variant="hero" className="flex-1">
          <Link to="/quote">Order Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
