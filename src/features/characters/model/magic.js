export function getMagicTypeLabel(magic) {
  const types = {
    destruction: 'Destrucción',
    barrier: 'Barrera',
    support: 'Soporte',
    illusion: 'Ilusión',
    summoning: 'Invocación',
  }

  return types[magic?.toLowerCase()] ?? 'Desconocido'
}
