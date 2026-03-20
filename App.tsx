import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";
import ConsultaCard from "./src/components/ConsultaCard";

export default function App() {
  const cardiologia: Especialidade = {
    id: 1,
    nome: "Cardiologia",
  };

  const medico1: Medico = {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "CRM12345",
    especialidade: cardiologia,
    ativo: true,
  };

  const paciente1: Paciente = {
    id: 1,
    nome: "Carlos Andrade",
    cpf: "123.456.789-00",
    email: "carlos@email.com",
  };

  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1,
    paciente: paciente1,
    data: new Date(),
    valor: 350,
    status: "agendada",
  });

  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }

  function cancelarConsulta() {
    setConsulta({
      ...consulta,
      status: "cancelada",
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>

      <ConsultaCard
        consulta={consulta}
        onConfirmar={confirmarConsulta}
        onCancelar={cancelarConsulta}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});