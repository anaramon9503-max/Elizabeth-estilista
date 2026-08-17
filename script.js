document.querySelectorAll('.service-group').forEach((group) => {
  group.addEventListener('toggle', () => {
    if (!group.open) return;
    document.querySelectorAll('.service-group').forEach((other) => {
      if (other !== group) other.open = false;
    });
  });
});
