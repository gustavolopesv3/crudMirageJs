import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Checkbox,
  Td,
  Text,
  Link,
  Spinner,
} from '@chakra-ui/react';
import { RiAddLine, RiEmotionNormalFill, RiPencilLine } from 'react-icons/ri';
import { useUsers } from '../services/hooks/useUsers';

export default function Home() {
  const { data, isLoading, error } = useUsers();

  return (
    <Box>
      <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '4', '6']}>
        <Flex mb="8" justifyContent="space-between" align="center">
          <Heading size="lg" fontWeight="normal">
            Usuarios
          </Heading>
          <Link href="users/create" passHref>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Link>
        </Flex>
        {isLoading ? (
          <Flex justify="center">
            <Spinner />
          </Flex>
        ) : (
          <>
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th>
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuario</Th>
                  <Th>Data de Cadastro</Th>

                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((user) => (
                  <Tr>
                    <Td px="6">
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">{user.name}</Text>
                        <Text fontSize="small" color="gray.300">
                          {user.email}
                        </Text>
                      </Box>
                    </Td>
                    <Th>{user.createdAt}</Th>
                    <Td>
                      {' '}
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        )}
      </Box>
    </Box>
  );
}
