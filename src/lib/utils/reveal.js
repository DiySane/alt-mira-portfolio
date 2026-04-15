export function reveal(node) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) node.classList.add("visible");
  });

  observer.observe(node);
}
