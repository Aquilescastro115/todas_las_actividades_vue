<template>
  <article class="emprendedor-card">
    <div class="card-meta">
      <span class="badge">{{ emprendedor.rubro }}</span>
      <span class="location">📍 {{ emprendedor.comuna }}</span>
    </div>
    <h3 class="card-name">{{ emprendedor.nombre }}</h3>
    <p class="card-desc">{{ emprendedor.descripcion }}</p>
    <div class="card-contact">
      <strong>Contacto:</strong> <span>{{ emprendedor.contacto }}</span>
    </div>
    <footer class="card-footer">
      <button class="btn-subtle" @click="$emit('editar', emprendedor)">Editar</button>
      <button class="btn-subtle text-danger" @click="$emit('eliminar', emprendedor)">Eliminar</button>
    </footer>
  </article>
</template>

<script setup>
defineProps({
  emprendedor: {
    type: Object,
    required: true,
  },
});
defineEmits(['editar', 'eliminar']);
</script>

<style scoped>
.emprendedor-card {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}
.emprendedor-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07);
}
.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.badge {
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
}
.location {
  font-size: 0.825rem;
  color: #64748b;
  font-weight: 500;
}
.card-name {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
  color: #0f172a;
}
.card-desc {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
  flex-grow: 1;
  margin-bottom: 1rem;
}
.card-contact {
  background: #f8fafc;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  font-size: 0.825rem;
  color: #334155;
  margin-bottom: 1rem;
  word-break: break-all;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  border-top: 1px solid #f1f5f9;
  padding-top: 0.75rem;
}
.btn-subtle {
  background: #f1f5f9;
  border: none;
  padding: 0.4rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  color: #334155;
}
.btn-subtle:hover {
  background: #e2e8f0;
}
.text-danger {
  color: #dc2626;
  background: #fee2e2;
}
.text-danger:hover {
  background: #fca5a5;
}
</style>