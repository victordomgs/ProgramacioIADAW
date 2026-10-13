// Destaca la fila de la setmana actual al calendari setmanal
document$.subscribe(() => {
  const avui = new Date();
  document.querySelectorAll(".calendari tbody tr").forEach((fila) => {
    const cel = fila.cells[1];
    if (!cel) return;
    const m = cel.textContent.trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!m) return;
    const inici = new Date(+m[3], +m[2] - 1, +m[1]);
    const fi = new Date(inici);
    fi.setDate(fi.getDate() + 7);
    if (avui >= inici && avui < fi) {
      fila.classList.add("setmana-actual");
    }
  });
});
