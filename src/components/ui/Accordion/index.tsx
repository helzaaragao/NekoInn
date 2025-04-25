import { Accordion, Span } from "@chakra-ui/react"
import { ItemContent, ItemIndicator, ItemTrigger, Root } from "./style"

const items = [
    { value: "a", title: "Cozy Corners: Where Comfort Meets Contentment", text: "NekoInn is more than a cat boarding facility; it's a home away from home for your furry family members. Nestled in serene surroundings, our inn offers a tranquil retreat for cats of all shapes, sizes, and personalities. With a team of dedicated caregivers passionate about feline welfare, we ensure every guest receives love, attention, and comfort. Rest easy knowing your cat is in caring hands at NekoInn." },
    { value: "b", title: "Palatial Purrfections: Opulence for Discerning Cats", text: "NekoInn is more than a cat boarding facility; it's a home away from home for your furry family members. Nestled in serene surroundings, our inn offers a tranquil retreat for cats of all shapes, sizes, and personalities. With a team of dedicated caregivers passionate about feline welfare, we ensure every guest receives love, attention, and comfort. Rest easy knowing your cat is in caring hands at NekoInn." },
    { value: "c", title: "Tailored Tranquility: Personalized Care for Every Cat", text: "NekoInn is more than a cat boarding facility; it's a home away from home for your furry family members. Nestled in serene surroundings, our inn offers a tranquil retreat for cats of all shapes, sizes, and personalities. With a team of dedicated caregivers passionate about feline welfare, we ensure every guest receives love, attention, and comfort. Rest easy knowing your cat is in caring hands at NekoInn." },
  ]

export const AccordionChackra = () => {
    return (
      <Root collapsible defaultValue={["a"]} variant={"outline"}>
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.value} >
            <ItemTrigger>
            <ItemIndicator />
              <Span flex="1">{item.title}</Span>
            </ItemTrigger>
            <ItemContent>
              <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
            </ItemContent>
          </Accordion.Item>
        ))}
      </Root>
    )
  }
  
