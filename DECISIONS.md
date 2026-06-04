## Architectural Decision

Choosing between tabs or accordion for the bottom section. Both options are good based on perspective. Tabs are good for the current implementation as the content is short and distinct. User can see all the options at once and quickly navigate between them. Accordion works best for long FAQ style content.

## Choice Justification

1. State Management: The only globals state is cart. I chose context api over redux as the global state is limited. Using redux for it will be overkill whereas context in built into react and sufficient for this use case.

2. Tabs vs Accordion: Tabs work best for this case as the content is short and user experience to see everything in a frame in achieved. Accordion will require extra space which will lead to scrolling .

3. Image zoom implementation was left undefined. I chose css scale transition as it is simple and performant.

## What I'd Do Differently With More Time

1. Improve product listing page with proper card design
2. Instead of plain "Loading..." text, I would have created some good loader design
3. Would have added TypeScript for prop type safety

## URL State Handling

If someone manually edits the url with a colour or size that doesn't exist, the app will correct it on load. It falls back to the first valid colour and clears the size. This way the page won't break and deep linking still works fine.