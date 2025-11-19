from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from openai import OpenAI
from django.conf import settings

class CompareAnswerView(APIView):
    def post(self, request):
        answer = request.data.get("answer")
        solution = request.data.get("solution")

        if not answer or not solution:
            return Response(
                {"error": "Both 'answer' and 'solution' are required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        client = OpenAI(api_key=settings.OPENAI_API_KEY)

        prompt = f"""
        Compare these two sentences:

        Student answer: {answer}
        Correct answer: {solution}

        Give clear but short feedback about:
        - what is correct and what is missing from the solution
        """

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )

        feedback = response.choices[0].message.content

        print(response)

        return Response({"feedback": feedback}, status=200)
