Feature: Another

  Scenario: Mostrar el valor de entrada en el segundo campo de solo lectura
    Given que estoy en la página Another
    When ingreso "¡Hola, Mundo!" en el campo de entrada
    And Y hago clic en el botón "Mostrar Valor"
    Then debería ver "¡Hola, Mundo!" en el segundo campo de solo lectura    
