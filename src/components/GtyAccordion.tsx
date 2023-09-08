import React, { ForwardedRef } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './accordion.css';

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  isSingle?: boolean;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

// Define the prop types for GtyAccordion
interface GtyAccordionProps {
  isDisabled?: boolean,
  items: {
    headerLabel: string;
    content?: {
      className: string;
      itemLabel: string;
      url?: string;
    }[];
  }[];
}

const GtyAccordion: React.FC<GtyAccordionProps> = ({items, isDisabled}) => (
  <Accordion.Root disabled={isDisabled} type="single" className="AccordionRoot" defaultValue={items[0].headerLabel} collapsible>
      {
        items?.map((item) => (
          <Accordion.Item className="AccordionItem" value={item.headerLabel}>
          <AccordionTrigger isSingle={item?.content && item?.content?.length > 0}>{item.headerLabel}</AccordionTrigger>
            {
              item.content?.map((contentItem) => (
                <AccordionContent
                  url={contentItem.url}
                  key={contentItem.itemLabel}
                  className={contentItem.className}>
                    {contentItem.itemLabel}
                </AccordionContent>
              ))
            }
          </Accordion.Item>
        ))
      }
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  (
    { children, className, isSingle = false, ...props }: AccordionTriggerProps,
    forwardedRef: ForwardedRef<HTMLDivElement> | null
  ) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef as React.RefObject<HTMLButtonElement>}
    >
      {children}
      { isSingle && <ChevronDownIcon className="AccordionChevron" aria-hidden />}
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(
  ({ children, url, className, ...props }: AccordionContentProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef as React.RefObject<HTMLDivElement>}
  >
    {
      url
      ? <div className="AccordionContentText"><a href={url}>{children}</a></div>
      : <div className="AccordionContentText">{children}</div>
    }
  </Accordion.Content>
));

export default GtyAccordion;