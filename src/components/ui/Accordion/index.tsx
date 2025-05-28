import { Accordion, Span } from "@chakra-ui/react"
import { ItemContent, ItemIndicator, ItemTrigger, Root } from "./style"
import { useTranslation } from "react-i18next";

const items = [
   { value: "a", titleKey: "accordion.cozyCorners.title", textKey: "accordion.cozyCorners.text" },
  { value: "b", titleKey: "accordion.palatialPurrfections.title", textKey: "accordion.palatialPurrfections.text" },
  { value: "c", titleKey: "accordion.tailoredTranquility.title", textKey: "accordion.tailoredTranquility.text" },
  ]

export const AccordionChackra = () => {
    const { t } = useTranslation('components');
    return (
      <Root collapsible defaultValue={["a"]} variant={"outline"}>
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.value} >
            <ItemTrigger>
            <ItemIndicator />
              <Span flex="1">{t(item.titleKey)}</Span>
            </ItemTrigger>
            <ItemContent>
              <Accordion.ItemBody>{t(item.textKey)}</Accordion.ItemBody>
            </ItemContent>
          </Accordion.Item>
        ))}
      </Root>
    )
  }
  
