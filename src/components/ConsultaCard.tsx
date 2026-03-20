import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Consulta } from "../interfaces/consulta";

type ConsultaCardProps = {
  consulta: Consulta;
  onConfirmar?: () => void;
  onCancelar?: () => void;
};

export default function ConsultaCard({
  consulta,
  onConfirmar,
  onCancelar,
}: ConsultaCardProps) {

  function formatarValor(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function formatarData(data: Date): string {
    return data.toLocaleDateString("pt-BR");
  }

  return (
    <View style={styles.card}>
      <Text>Paciente: {consulta.paciente.nome}</Text>
      <Text>Médico: {consulta.medico.nome}</Text>
      <Text>Data: {formatarData(consulta.data)}</Text>
      <Text>Valor: {formatarValor(consulta.valor)}</Text>
      <Text>Status: {consulta.status}</Text>

      {consulta.status === "agendada" && (
        <>
          <Button title="Confirmar" onPress={onConfirmar} />
          <Button title="Cancelar" onPress={onCancelar} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginTop: 20,
  },
});