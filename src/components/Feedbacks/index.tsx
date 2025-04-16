import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export function Feedbacks(){
    return(
        <div>
            <header>
                <span>Pawsitive Reviews from Happy Customers</span>
                <h2>They Celebrate</h2>
                <p>Discover what our clients have to say about their experiences at NekoInn. Their testimonials speak volumes about the exceptional care and service we provide for their beloved feline companions.</p>
            </header>
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}