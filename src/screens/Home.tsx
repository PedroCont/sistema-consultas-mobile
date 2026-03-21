import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Consulta } from "../interfaces/consulta";
import { ConsultaCard } from "../components";

export default function Home() {
  // 📦 LISTA DE CONSULTAS
  const listaConsultas: Consulta[] = [
  {
    id: 1,
    medico: {
      id: 1,
      nome: "Dr. Roberto Silva",
      crm: "CRM12345",
      especialidade: {
        id: 1,
        nome: "Cardiologia",
        descricao: "Cuidados com o coração",
      },
      ativo: true,
    },
    paciente: {
      id: 1,
      nome: "Carlos Andrade",
      cpf: "123.456.789-00",
      email: "carlos@email.com",
      telefone: "(11) 98765-4321",
    },
    data: new Date(2026, 2, 10),
    valor: 350,
    status: "agendada",
    observacoes: "Consulta de rotina",
  },

  {
    id: 2,
    medico: {
      id: 2,
      nome: "Dra. Ana Souza",
      crm: "CRM54321",
      especialidade: {
        id: 2,
        nome: "Dermatologia",
        descricao: "Cuidados com a pele",
      },
      ativo: true,
    },
    paciente: {
      id: 2,
      nome: "Mariana Lima",
      cpf: "987.654.321-00",
      email: "mariana@email.com",
    },
    data: new Date(2026, 3, 5),
    valor: 200,
    status: "confirmada",
    observacoes: "Avaliação de manchas",
  },

  {
    id: 3,
    medico: {
      id: 3,
      nome: "Dr. Paulo Mendes",
      crm: "CRM77777",
      especialidade: {
        id: 3,
        nome: "Ortopedia",
        descricao: "Sistema musculoesquelético",
      },
      ativo: true,
    },
    paciente: {
      id: 3,
      nome: "Lucas Ferreira",
      cpf: "111.222.333-44",
      email: "lucas@email.com",
      telefone: "(11) 91234-5678",
    },
    data: new Date(2026, 4, 15),
    valor: 400,
    status: "cancelada",
    observacoes: "Dor no joelho",
  },

  {
    id: 4,
    medico: {
      id: 4,
      nome: "Dra. Fernanda Costa",
      crm: "CRM88888",
      especialidade: {
        id: 4,
        nome: "Pediatria",
        descricao: "Saúde infantil",
      },
      ativo: true,
    },
    paciente: {
      id: 4,
      nome: "João Pedro",
      cpf: "555.666.777-88",
      email: "joao@email.com",
    },
    data: new Date(2026, 5, 20),
    valor: 180,
    status: "agendada",
  },

  {
    id: 5,
    medico: {
      id: 5,
      nome: "Dr. Ricardo Alves",
      crm: "CRM99999",
      especialidade: {
        id: 5,
        nome: "Neurologia",
        descricao: "Sistema nervoso",
      },
      ativo: true,
    },
    paciente: {
      id: 5,
      nome: "Fernanda Rocha",
      cpf: "999.888.777-66",
      email: "fernanda@email.com",
      telefone: "(11) 99876-5432",
    },
    data: new Date(2026, 6, 12),
    valor: 500,
    status: "confirmada",
    observacoes: "Enxaqueca frequente",
  },
];

  // 🧠 STATE (LISTA)
  const [consultas, setConsultas] = useState<Consulta[]>(listaConsultas);

  // ✅ CONFIRMAR POR ID
  function confirmarConsulta(id: number) {
    const atualizadas = consultas.map((c) =>
      c.id === id ? { ...c, status: "confirmada" as const } : c
    );

    setConsultas(atualizadas);
  }

  // ❌ CANCELAR POR ID
  function cancelarConsulta(id: number) {
    const atualizadas = consultas.map((c) =>
      c.id === id ? { ...c, status: "cancelada" as const } : c
    );

    setConsultas(atualizadas);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Sistema de Consultas</Text>
        </View>

        {/* 🔥 LISTA DE CARDS */}
        {consultas.map((c) => (
          <ConsultaCard
            key={c.id}
            consulta={c}
            onConfirmar={() => confirmarConsulta(c.id)}
            onCancelar={() => cancelarConsulta(c.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#79059C",
  },
  scroll: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
  },
});