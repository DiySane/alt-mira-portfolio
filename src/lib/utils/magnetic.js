export function magnetic(node) {
  node.addEventListener("mousemove", (e) => {
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  node.addEventListener("mouseleave", () => {
    node.style.transform = "translate(0,0)";
  });
}
