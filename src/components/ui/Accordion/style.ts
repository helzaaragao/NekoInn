import { Accordion } from "@chakra-ui/react";
import styled from "styled-components";

export const Root = styled(Accordion.Root)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ItemTrigger = styled(Accordion.ItemTrigger)`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
     @media (min-width: 1440px) {
        font-size: 1.25rem;
     }
`
export const ItemIndicator = styled(Accordion.ItemIndicator)`
    background-color: ${({ theme }) => theme.colors["main-color"]};
    color: ${({ theme }) => theme.colors["day-background"]};
    border-radius: 999px;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const ItemContent = styled(Accordion.ItemContent)`
    font-size: 0.875rem;
    text-align: start;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    padding-left: 3rem;
`