document.querySelectorAll('.service-group').forEach((group) => {
  group.addEventListener('toggle', () => {
    if (!group.open) return;
    document.querySelectorAll('.service-group').forEach((other) => {
      if (other !== group) other.open = false;
    });
  });
});

function copyClabe() {
  const clabe = document.getElementById('clabe')?.textContent?.trim();
  if (!clabe) return;
  navigator.clipboard.writeText(clabe).then(() => {
    const btn = document.querySelector('.copy-btn');
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = 'CLABE copiada ✓';
    setTimeout(() => { btn.textContent = original; }, 1800);
  });
}
